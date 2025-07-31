import { CertificateUsecase } from '../usecases/cerificate.usecase.mjs';

/**
 * Controller class responsible for handling certificate-related HTTP requests.
 */
export class CertificateController {
  /**
   * Handles the request to generate certificates based on the given category name.
   * 
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @param {import('express').NextFunction} next - The Express next middleware function.
   * 
   * @returns {Promise<void>} Sends a JSON response containing the generated certificates or forwards an error.
   * 
   * @throws {Error} If the category name is missing in the request body.
   */
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
