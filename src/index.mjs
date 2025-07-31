import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import certificateRoutes from './apps/certificate/routes/certificate.route.mjs';
import { ErrorHandler } from './middlewares/error.middleware.mjs';
import swaggerSpecs from './infrastructures/config/swagger.config.mjs';
import { 
  SERVER, 
  ENVIRONMENT, 
  MONGODB, 
  SWAGGER_UI, 
  ERROR_MESSAGES, 
  SUCCESS_MESSAGES 
} from './infrastructures/constants/constants.mjs';

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
    this.#port = process.env[ENVIRONMENT.PORT] || SERVER.DEFAULT_PORT;
    this.#mongoUri = process.env[ENVIRONMENT.MONGO_URI];
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
    this.#app.get(SERVER.ROOT_PATH, (req, res) => {
      res.redirect(SERVER.API_DOCS_PATH);
    });

    // Swagger UI route
    this.#app.use(SERVER.API_DOCS_PATH, swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
      customCss: SWAGGER_UI.CUSTOM_CSS,
      customSiteTitle: SWAGGER_UI.SITE_TITLE,
      customfavIcon: SERVER.FAVICON_PATH,
      swaggerOptions: SWAGGER_UI.OPTIONS
    }));

    // API routes
    this.#app.use(SERVER.CERTIFICATES_API_PATH, certificateRoutes);
    
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
        throw new Error(ERROR_MESSAGES.MONGO_URI_MISSING);
      }
      await mongoose.connect(this.#mongoUri, MONGODB.CONNECTION_OPTIONS);
      console.log(SUCCESS_MESSAGES.MONGO_CONNECTED);
    } catch (error) {
      console.error(ERROR_MESSAGES.MONGO_CONNECTION_FAILED + ':', error.message);
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
        console.log(`${SUCCESS_MESSAGES.SERVER_RUNNING} ${this.#port}`);
      });
    } catch (error) {
      console.error(ERROR_MESSAGES.SERVER_START_FAILED + ':', error.message);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();
