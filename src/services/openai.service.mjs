import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Service class to interact with OpenAI's API for generating certificate-related text.
 */
export class OpenAIService {
  /**
   * @private
   * @type {OpenAI}
   */
  #openai;

  /**
   * Initializes the OpenAI client with the API key from environment variables.
   * 
   * @throws {Error} If the OpenAI API key is not set in the environment.
   */
  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing');
    }
    this.#openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  /**
   * Generates a short, formal certificate description based on a given category name.
   * 
   * @param {string} categoryName - The category for which to generate the certificate description.
   * @returns {Promise<string>} A promise that resolves to the generated certificate description.
   * 
   * @throws {Error} If the input category name is invalid.
   */
  async generateCertificateText(categoryName) {
    try {
      if (!categoryName || typeof categoryName !== 'string') {
        throw new Error('Invalid category name provided');
      }

      const prompt = `Generate a professional certificate description for "${categoryName}". Keep it concise, formal, and suitable for a certificate. Maximum 50 words.`;

      const response = await this.#openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 60,
        temperature: 0.7,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('OpenAI API error:', error.message);
      // Fallback response if OpenAI fails
      return `Certificate of Achievement for ${categoryName}. Awarded for outstanding performance and dedication.`;
    }
  }
}
