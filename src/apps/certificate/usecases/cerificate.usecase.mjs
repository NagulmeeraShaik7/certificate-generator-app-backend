import { CertificateRepository } from '../repositories/certificate.repository.mjs';

export class CertificateUsecase {
  static async generateCertificates(categoryName) {
    try {
      return await CertificateRepository.generateCertificateData(categoryName);
    } catch (error) {
      throw new Error(`Usecase error: ${error.message}`);
    }
  }
} 