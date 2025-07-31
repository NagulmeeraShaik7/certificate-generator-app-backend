import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import certificateRoutes from './apps/certificate/routes/certificate.route.mjs';
import { ErrorHandler } from './middlewares/error.middleware.mjs';
import swaggerSpecs from './infrastructures/config/swagger.config.mjs';

dotenv.config();

/**
 * Server class to initialize and run an Express application
 * with MongoDB connection and routing configuration.
 */
class Server {
  /** @type {import('express').Express} */
  #app;

  /** @type {string|number} */
  #port;

  /** @type {string|undefined} */
  #mongoUri;

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT || 3300;
    this.#mongoUri = process.env.MONGO_URI;
    this.#configureMiddleware();
    this.#configureRoutes();
  }

  /**
   * Configures middleware like CORS and JSON parsing.
   * @private
   */
  #configureMiddleware() {
    this.#app.use(cors());
    this.#app.use(express.json());
  }

  /**
   * Sets up application routes and error handling middleware.
   * @private
   */
  #configureRoutes() {
    // Root route - redirect to API docs
    this.#app.get('/', (req, res) => {
      res.redirect('/api-docs');
    });

    // Swagger UI route
    this.#app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'Certificate Generator API Documentation',
      customfavIcon: '/favicon.ico',
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        filter: true,
        deepLinking: true
      }
    }));

    // API routes
    this.#app.use('/api/certificates', certificateRoutes);
    
    // Global error handler
    this.#app.use(ErrorHandler.handle);
  }

  /**
   * Connects to MongoDB using Mongoose.
   * Logs error and throws if connection fails.
   * @private
   * @returns {Promise<void>}
   */
  async #connectToMongoDB() {
    try {
      if (!this.#mongoUri) {
        throw new Error('MongoDB URI is missing in environment variables');
      }
      await mongoose.connect(this.#mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Connected to MongoDB');
    } catch (error) {
      console.error('❌ Failed to connect to MongoDB:', error.message);
      throw error;
    }
  }

  /**
   * Starts the Express server after connecting to MongoDB.
   * Logs startup status or exits on error.
   * @public
   */
  async start() {
    try {
      await this.#connectToMongoDB();
      this.#app.listen(this.#port, () => {
        console.log(`🚀 Server running on port ${this.#port}`);
      });
    } catch (error) {
      console.error('❌ Failed to start server:', error.message);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();
