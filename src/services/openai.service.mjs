import OpenAI from 'openai';
import dotenv from 'dotenv';
import { ENVIRONMENT, OPENAI as OPENAI_CONSTANTS, ERROR_MESSAGES, LOG_MESSAGES } from '../infrastructures/constants/constants.mjs';

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
    if (!process.env[ENVIRONMENT.OPENAI_API_KEY]) {
      throw new Error(ERROR_MESSAGES.OPENAI_API_KEY_MISSING);
    }
    this.#openai = new OpenAI({
      apiKey: process.env[ENVIRONMENT.OPENAI_API_KEY],
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
        throw new Error(ERROR_MESSAGES.INVALID_CATEGORY_NAME);
      }

      const prompt = OPENAI_CONSTANTS.PROMPT_TEMPLATE.replace('{categoryName}', categoryName);

      const response = await this.#openai.chat.completions.create({
        model: OPENAI_CONSTANTS.MODEL,
        messages: [{ role: OPENAI_CONSTANTS.ROLE.USER, content: prompt }],
        max_tokens: OPENAI_CONSTANTS.PARAMETERS.MAX_TOKENS,
        temperature: OPENAI_CONSTANTS.PARAMETERS.TEMPERATURE,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error(LOG_MESSAGES.OPENAI_API_ERROR, error.message);
      // Fallback response if OpenAI fails
      return OPENAI_CONSTANTS.FALLBACK_TEMPLATE.replace('{categoryName}', categoryName);
    }
  }
}
