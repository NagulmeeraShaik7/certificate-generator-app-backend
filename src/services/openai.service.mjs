import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export class OpenAIService {
  #openai;

  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing');
    }
    this.#openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

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
      return `Certificate of Achievement for ${categoryName}. Awarded for outstanding performance and dedication.`;
    }
  }
} 