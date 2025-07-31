import { CertificateUsecase } from '../usecases/cerificate.usecase.mjs';

export class CertificateController {
  static async createCertificates(req, res, next) {
    try {
      const { categoryName } = req.body;
      if (!categoryName) {
        throw new Error('Category name is required');
      }
      const certificates = await CertificateUsecase.generateCertificates(categoryName);
      res.status(200).json(certificates);
    } catch (error) {
      next(error);
    } 
  }
}