import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import { OpenAIService } from '../../../services/openai.service.mjs';
import { CanvasGenerator } from '../../../utils/canvas.generator.mjs';
import { CertificateModel } from '../models/cerificate.model.mjs';
import { CERTIFICATE_REPOSITORY, ERROR_MESSAGES } from '../../../infrastructures/constants/constants.mjs';

/**
 * Repository class for handling certificate generation and persistence.
 */
export class CertificateRepository {
  /**
   * List of background image URLs used for certificate design.
   * @type {string[]}
   * @private
   */
  static #backgrounds = CERTIFICATE_REPOSITORY.BACKGROUNDS;

  /**
   * Generates a list of certificates using OpenAI to generate descriptions
   * and stores them in the database.
   *
   * @param {string} categoryName - The category of certificates to generate.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of saved certificate objects.
   * @throws {Error} Throws if the category name is invalid or if any step fails.
   */
  static async generateCertificateData(categoryName) {
    try {
      if (!categoryName || typeof categoryName !== 'string') {
        throw new Error(ERROR_MESSAGES.INVALID_CATEGORY);
      }

      const openAIService = new OpenAIService(); // Instantiate OpenAIService

      const certificates = await Promise.all(
        this.#backgrounds.map(async (background, index) => {
          const text = await openAIService.generateCertificateText(categoryName);
          const design = CanvasGenerator.createCanvasDesign(index + 1);
          
          const certificate = new CertificateModel({
            id: uuidv4(),
            categoryName,
            title: CERTIFICATE_REPOSITORY.TITLE_TEMPLATE
              .replace('{categoryName}', categoryName)
              .replace('{index}', index + 1),
            description: text,
            background,
            design,
          });

          await certificate.save(); // Save to MongoDB
          return certificate;
        })
      );

      return certificates;
    } catch (error) {
      throw new Error(`${ERROR_MESSAGES.CERTIFICATE_GENERATION_FAILED} ${error.message}`);
    }
  }
}
