import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Certificate Generator API',
      version: '1.0.0',
      description: 'API for generating certificates with AI-powered content',
      contact: {
        name: 'API Support',
        email: 'support@certificategenerator.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:3300',
        description: 'Development server'
      },
      {
        url: 'https://api.certificategenerator.com',
        description: 'Production server'
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
        name: 'Certificates',
        description: 'Operations related to certificate generation and management'
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
