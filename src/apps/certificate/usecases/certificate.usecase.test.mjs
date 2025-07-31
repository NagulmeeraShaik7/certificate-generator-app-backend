import { ERROR_MESSAGES } from '../../../infrastructures/constants/constants.mjs';
import { CertificateRepository } from '../repositories/certificate.repository.mjs';
import { CertificateUsecase } from './cerificate.usecase.mjs';

// Mock the repository method
jest.mock('../repositories/certificate.repository.mjs', () => ({
  CertificateRepository: {
    generateCertificateData: jest.fn()
  }
}));

describe('CertificateUsecase.generateCertificates', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return generated certificates when successful', async () => {
    const mockCertificates = [
      { name: 'Alice', category: 'AI' },
      { name: 'Bob', category: 'AI' }
    ];

    CertificateRepository.generateCertificateData.mockResolvedValue(mockCertificates);

    const result = await CertificateUsecase.generateCertificates('AI');

    expect(CertificateRepository.generateCertificateData).toHaveBeenCalledWith('AI');
    expect(result).toEqual(mockCertificates);
  });

  it('should throw usecase-level error when repository fails', async () => {
    CertificateRepository.generateCertificateData.mockRejectedValue(new Error('Repository error'));

    await expect(CertificateUsecase.generateCertificates('AI')).rejects.toThrow(
      `${ERROR_MESSAGES.USECASE_ERROR} Repository error`
    );
  });
});
