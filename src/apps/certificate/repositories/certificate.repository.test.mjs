import { jest } from '@jest/globals';
import { CERTIFICATE_REPOSITORY, ERROR_MESSAGES } from '../../../infrastructures/constants/constants.mjs';
import { OpenAIService } from '../../../services/openai.service.mjs';
import { CanvasGenerator } from '../../../utils/canvas.generator.mjs';
import { CertificateModel } from '../models/cerificate.model.mjs';
import { CertificateRepository } from './certificate.repository.mjs';

// Mocks
jest.mock('../../../services/openai.service.mjs');
jest.mock('../../../utils/canvas.generator.mjs');
jest.mock('../models/cerificate.model.mjs');

describe('CertificateRepository.generateCertificateData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw error if categoryName is invalid', async () => {
    await expect(CertificateRepository.generateCertificateData(null)).rejects.toThrow(
      ERROR_MESSAGES.INVALID_CATEGORY
    );

    await expect(CertificateRepository.generateCertificateData(123)).rejects.toThrow(
      ERROR_MESSAGES.INVALID_CATEGORY
    );
  });

  it('should generate certificates and save to DB', async () => {
    // Setup
    const categoryName = 'Web Development';
    const mockDescription = 'Generated description';
    const mockDesign = 'design-data';

    // Set mock return values
    OpenAIService.mockImplementation(() => ({
      generateCertificateText: jest.fn().mockResolvedValue(mockDescription)
    }));

    CanvasGenerator.createCanvasDesign = jest.fn().mockReturnValue(mockDesign);

    CertificateModel.mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue()
    }));

    const result = await CertificateRepository.generateCertificateData(categoryName);

    expect(OpenAIService).toHaveBeenCalledTimes(1);
    expect(CanvasGenerator.createCanvasDesign).toHaveBeenCalledTimes(CERTIFICATE_REPOSITORY.BACKGROUNDS.length);
    expect(CertificateModel).toHaveBeenCalledTimes(CERTIFICATE_REPOSITORY.BACKGROUNDS.length);

    result.forEach((certificate, index) => {
      expect(certificate).toHaveProperty('id');
      expect(certificate.categoryName).toBe(categoryName);
      expect(certificate.description).toBe(mockDescription);
      expect(certificate.background).toBe(CERTIFICATE_REPOSITORY.BACKGROUNDS[index]);
      expect(certificate.design).toBe(mockDesign);
      expect(certificate.title).toBe(
        CERTIFICATE_REPOSITORY.TITLE_TEMPLATE
          .replace('{categoryName}', categoryName)
          .replace('{index}', index + 1)
      );
    });
  });

  it('should handle internal errors gracefully', async () => {
    OpenAIService.mockImplementation(() => ({
      generateCertificateText: jest.fn().mockRejectedValue(new Error('OpenAI failed'))
    }));

    await expect(CertificateRepository.generateCertificateData('Web Development')).rejects.toThrow(
      `${ERROR_MESSAGES.CERTIFICATE_GENERATION_FAILED} OpenAI failed`
    );

  });
});
