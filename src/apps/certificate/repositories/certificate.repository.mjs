import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import { OpenAIService } from '../../../services/openai.service.mjs';
import { CanvasGenerator } from '../../../utils/canvas.generator.mjs';
import { CertificateModel } from '../models/cerificate.model.mjs';

/**
 * Repository class for handling certificate generation and persistence.
 */
export class CertificateRepository {
  /**
   * List of background image URLs used for certificate design.
   * @type {string[]}
   * @private
   */
  static #backgrounds = [
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop&sat=-100',
    'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop&sat=-100',
  ];

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
        throw new Error('Invalid category name');
      }

      const openAIService = new OpenAIService(); // Instantiate OpenAIService

      const certificates = await Promise.all(
        this.#backgrounds.map(async (background, index) => {
          const text = await openAIService.generateCertificateText(categoryName);
          const design = CanvasGenerator.createCanvasDesign(index + 1);
          
          const certificate = new CertificateModel({
            id: uuidv4(),
            categoryName,
            title: `${categoryName} - Design ${index + 1}`,
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
      throw new Error(`Failed to generate certificate data: ${error.message}`);
    }
  }
}
