/**
 * Application Constants
 * This file contains all string literals and constants used throughout the application.
 */

// ============================================================================
// SERVER & CONFIGURATION CONSTANTS
// ============================================================================

export const SERVER = {
  DEFAULT_PORT: 3300,
  ROOT_PATH: '/',
  API_DOCS_PATH: '/api-docs',
  CERTIFICATES_API_PATH: '/api/certificates',
  FAVICON_PATH: '/favicon.ico'
};

export const ENVIRONMENT = {
  PORT: 'PORT',
  MONGO_URI: 'MONGO_URI',
  OPENAI_API_KEY: 'OPENAI_API_KEY'
};

export const MONGODB = {
  CONNECTION_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

// ============================================================================
// SWAGGER UI CONSTANTS
// ============================================================================

export const SWAGGER_UI = {
  CUSTOM_CSS: '.swagger-ui .topbar { display: none }',
  SITE_TITLE: 'Certificate Generator API Documentation',
  OPTIONS: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    deepLinking: true
  }
};

// ============================================================================
// API DOCUMENTATION CONSTANTS
// ============================================================================

export const API_INFO = {
  TITLE: 'Certificate Generator API',
  VERSION: '1.0.0',
  DESCRIPTION: 'API for generating certificates with AI-powered content',
  CONTACT: {
    NAME: 'API Support',
    EMAIL: 'support@certificategenerator.com'
  },
  LICENSE: {
    NAME: 'MIT',
    URL: 'https://opensource.org/licenses/MIT'
  }
};

export const API_SERVERS = {
  DEVELOPMENT: {
    URL: 'http://localhost:3300',
    DESCRIPTION: 'Development server'
  },
  PRODUCTION: {
    URL: 'https://api.certificategenerator.com',
    DESCRIPTION: 'Production server'
  }
};

export const API_TAGS = {
  CERTIFICATES: {
    NAME: 'Certificates',
    DESCRIPTION: 'Operations related to certificate generation and management'
  }
};

// ============================================================================
// ERROR MESSAGES
// ============================================================================

export const ERROR_MESSAGES = {
  // MongoDB Errors
  MONGO_URI_MISSING: 'MongoDB URI is missing in environment variables',
  MONGO_CONNECTION_FAILED: 'Failed to connect to MongoDB',
  
  // OpenAI Errors
  OPENAI_API_KEY_MISSING: 'OpenAI API key is missing',
  INVALID_CATEGORY_NAME: 'Invalid category name provided',
  OPENAI_API_ERROR: 'OpenAI API error:',
  
  // Certificate Errors
  CATEGORY_NAME_REQUIRED: 'Category name is required',
  INVALID_CATEGORY: 'Invalid category name',
  CERTIFICATE_GENERATION_FAILED: 'Failed to generate certificate data',
  
  // Usecase Errors
  USECASE_ERROR: 'Usecase error:',
  
  // Server Errors
  SERVER_START_FAILED: 'Failed to start server',
  INTERNAL_SERVER_ERROR: 'Internal Server Error'
};

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

export const SUCCESS_MESSAGES = {
  MONGO_CONNECTED: '✅ Connected to MongoDB',
  SERVER_RUNNING: '🚀 Server running on port'
};

// ============================================================================
// OPENAI SERVICE CONSTANTS
// ============================================================================

export const OPENAI = {
  MODEL: 'gpt-3.5-turbo',
  ROLE: {
    USER: 'user'
  },
  PARAMETERS: {
    MAX_TOKENS: 60,
    TEMPERATURE: 0.7
  },
  PROMPT_TEMPLATE: 'Generate a professional certificate description for "{categoryName}". Keep it concise, formal, and suitable for a certificate. Maximum 50 words.',
  FALLBACK_TEMPLATE: 'Certificate of Achievement for {categoryName}. Awarded for outstanding performance and dedication.'
};

// ============================================================================
// CERTIFICATE MODEL CONSTANTS
// ============================================================================

export const CERTIFICATE_MODEL = {
  COLLECTION_NAME: 'Certificate',
  FIELDS: {
    ID: 'id',
    CATEGORY_NAME: 'categoryName',
    TITLE: 'title',
    DESCRIPTION: 'description',
    BACKGROUND: 'background',
    DESIGN: 'design'
  }
};

// ============================================================================
// CERTIFICATE REPOSITORY CONSTANTS
// ============================================================================

export const CERTIFICATE_REPOSITORY = {
  BACKGROUNDS: [
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop&sat=-100',
    'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop&sat=-100'
  ],
  TITLE_TEMPLATE: '{categoryName} - Design {index}'
};

// ============================================================================
// CANVAS GENERATOR CONSTANTS
// ============================================================================

export const CANVAS = {
  DIMENSIONS: {
    WIDTH: 800,
    HEIGHT: 600
  },
  COLORS: {
    // Modern Gradient Design (Design 1)
    MODERN_GRADIENT_START: '#667eea',
    MODERN_GRADIENT_END: '#764ba2',
    WHITE: '#ffffff',
    WHITE_TRANSPARENT_30: 'rgba(255, 255, 255, 0.3)',
    WHITE_TRANSPARENT_10: 'rgba(255, 255, 255, 0.1)',
    WHITE_TRANSPARENT_50: 'rgba(255, 255, 255, 0.5)',
    WHITE_TRANSPARENT_90: 'rgba(255, 255, 255, 0.9)',
    SHADOW: 'rgba(0, 0, 0, 0.3)',
    TRANSPARENT: 'transparent',
    
    // Elegant Dark Theme (Design 2)
    DARK_BG: '#1a1a1a',
    GOLD: '#ffd700',
    GOLD_LIGHT: '#ffed4e',
    GOLD_TRANSPARENT_30: 'rgba(255, 215, 0, 0.3)',
    WHITE_TRANSPARENT_80: 'rgba(255, 255, 255, 0.8)',
    
    // Modern Minimalist (Design 3)
    WHITE_BG: '#ffffff',
    MINIMAL_PATTERN: 'rgba(0, 0, 0, 0.02)',
    DARK_GRAY: '#333333',
    MEDIUM_GRAY: '#666666',
    LIGHT_GRAY: '#555555',
    
    // Vibrant Colorful Design (Design 4)
    VIBRANT_RED: '#ff6b6b',
    VIBRANT_TEAL: '#4ecdc4',
    VIBRANT_BLUE: '#45b7d1',
    WHITE_OVERLAY: 'rgba(255, 255, 255, 0.1)',
    WHITE_TRANSPARENT_80_BORDER: 'rgba(255, 255, 255, 0.8)',
    WHITE_TRANSPARENT_30_DECORATIVE: 'rgba(255, 255, 255, 0.3)',
    WHITE_TRANSPARENT_50_ACCENT: 'rgba(255, 255, 255, 0.5)',
    
    // Professional Corporate Style (Design 5)
    CORPORATE_DARK: '#2c3e50',
    CORPORATE_GOLD: '#f39c12',
    CORPORATE_GOLD_TRANSPARENT_30: 'rgba(243, 156, 18, 0.3)',
    CORPORATE_LIGHT: '#ecf0f1',
    CORPORATE_GRAY: '#bdc3c7'
  },
  FONTS: {
    SEGOE_UI: '"Segoe UI", Arial, sans-serif',
    GEORGIA: '"Georgia", serif',
    HELVETICA: '"Helvetica Neue", Arial, sans-serif',
    ARIAL: '"Arial", sans-serif',
    TIMES_NEW_ROMAN: '"Times New Roman", serif'
  },
  TITLES: {
    ACHIEVEMENT: 'Certificate of Achievement',
    EXCELLENCE: 'Certificate of Excellence',
    COMPLETION: 'Certificate of Completion',
    RECOGNITION: 'Certificate of Recognition'
  },
  STYLES: {
    BORDER_WIDTH: {
      THIN: 1,
      MEDIUM: 2,
      THICK: 3,
      VERY_THICK: 6,
      EXTRA_THICK: 8,
      MAXIMUM: 10
    },
    SHADOW: {
      COLOR: 'rgba(0, 0, 0, 0.3)',
      BLUR: 4,
      OFFSET_X: 2,
      OFFSET_Y: 2
    }
  }
};

// ============================================================================
// HTTP STATUS CODES
// ============================================================================

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
};

// ============================================================================
// RESPONSE KEYS
// ============================================================================

export const RESPONSE_KEYS = {
  ERROR: 'error',
  SUCCESS: 'success',
  MESSAGE: 'message',
  DATA: 'data',
  COUNT: 'count',
  STATUS: 'status',
  TIMESTAMP: 'timestamp'
};

// ============================================================================
// VALIDATION CONSTANTS
// ============================================================================

export const VALIDATION = {
  CATEGORY_NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 100
  }
};

// ============================================================================
// DESIGN TEMPLATES
// ============================================================================

export const DESIGN_TEMPLATES = {
  MODERN_GRADIENT: 1,
  ELEGANT_DARK: 2,
  MODERN_MINIMALIST: 3,
  VIBRANT_COLORFUL: 4,
  PROFESSIONAL_CORPORATE: 5
};

// ============================================================================
// LOG MESSAGES
// ============================================================================

export const LOG_MESSAGES = {
  ERROR: 'Error:',
  OPENAI_API_ERROR: 'OpenAI API error:'
};
