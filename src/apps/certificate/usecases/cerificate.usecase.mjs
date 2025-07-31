import { CertificateRepository } from '../repositories/certificate.repository.mjs';
import { ERROR_MESSAGES } from '../../../infrastructures/constants/constants.mjs';

/**
 * Usecase class for handling business logic related to certificates.
 */
export class CertificateUsecase {
  /**
   * Generates certificates for a given category by delegating to the repository.
   * 
   * @param {string} categoryName - The name of the category to generate certificates for.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of generated certificates.
   * @throws {Error} Throws an error if certificate generation fails.
   */
  static async generateCertificates(categoryName) {
    try {
      return await CertificateRepository.generateCertificateData(categoryName);
    } catch (error) {
      throw new Error(`${ERROR_MESSAGES.USECASE_ERROR} ${error.message}`);
    }
  }
}
