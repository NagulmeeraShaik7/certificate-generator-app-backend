import { ERROR_MESSAGES, HTTP_STATUS } from '../../../infrastructures/constants/constants.mjs';
import { CertificateUsecase } from '../usecases/cerificate.usecase.mjs';
import { CertificateController } from './certificate.controller.mjs';

// Mock the CertificateUsecase
jest.mock('../usecases/cerificate.usecase.mjs');

describe('CertificateController', () => {
  let req, res, next;

  beforeEach(() => {
    // Mock Express request, response, and next function
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createCertificates', () => {
    it('should generate certificates and return 200 status with certificates data', async () => {
      // Arrange
      const categoryName = 'test-category';
      const mockCertificates = [{ id: 1, name: 'Test Certificate' }];
      req.body = { categoryName };
      CertificateUsecase.generateCertificates.mockResolvedValue(mockCertificates);

      // Act
      await CertificateController.createCertificates(req, res, next);

      // Assert
      expect(CertificateUsecase.generateCertificates).toHaveBeenCalledWith(categoryName);
      expect(res.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
      expect(res.json).toHaveBeenCalledWith(mockCertificates);
      expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when categoryName is missing', async () => {
      // Arrange
      req.body = {};
      const expectedError = new Error(ERROR_MESSAGES.CATEGORY_NAME_REQUIRED);

      // Act
      await CertificateController.createCertificates(req, res, next);

      // Assert
      expect(CertificateUsecase.generateCertificates).not.toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(expectedError);
    });

    it('should call next with error when CertificateUsecase throws an error', async () => {
      // Arrange
      const categoryName = 'test-category';
      req.body = { categoryName };
      const mockError = new Error('Usecase error');
      CertificateUsecase.generateCertificates.mockRejectedValue(mockError);

      // Act
      await CertificateController.createCertificates(req, res, next);

      // Assert
      expect(CertificateUsecase.generateCertificates).toHaveBeenCalledWith(categoryName);
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(mockError);
    });
  });
});
