import swaggerJsdoc from 'swagger-jsdoc';
import { API_INFO, API_SERVERS, API_TAGS } from '../constants/constants.mjs';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: API_INFO.TITLE,
      version: API_INFO.VERSION,
      description: API_INFO.DESCRIPTION,
      contact: {
        name: API_INFO.CONTACT.NAME,
        email: API_INFO.CONTACT.EMAIL
      },
      license: {
        name: API_INFO.LICENSE.NAME,
        url: API_INFO.LICENSE.URL
      }
    },
    servers: [
      {
        url: API_SERVERS.DEVELOPMENT.URL,
        description: API_SERVERS.DEVELOPMENT.DESCRIPTION
      },
      {
        url: API_SERVERS.PRODUCTION.URL,
        description: API_SERVERS.PRODUCTION.DESCRIPTION
      }
    ],
    components: {
      schemas: {
        Certificate: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the certificate'
            },
            categoryName: {
              type: 'string',
              description: 'Category name for the certificate'
            },
            title: {
              type: 'string',
              description: 'Title of the certificate'
            },
            description: {
              type: 'string',
              description: 'Description of the certificate'
            },
            background: {
              type: 'string',
              description: 'Background design of the certificate'
            },
            design: {
              type: 'string',
              description: 'Design template of the certificate'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message'
            },
            status: {
              type: 'number',
              description: 'HTTP status code'
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              description: 'Error timestamp'
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    tags: [
      {
        name: API_TAGS.CERTIFICATES.NAME,
        description: API_TAGS.CERTIFICATES.DESCRIPTION
      }
    ]
  },
  apis: [
    './src/apps/*/routes/*.mjs',
    './src/index.mjs'
  ]
};

const specs = swaggerJsdoc(options);

export default specs;
