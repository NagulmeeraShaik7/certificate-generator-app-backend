import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import certificateRoutes from './apps/certificate/routes/certificate.route.mjs';
import { ErrorHandler } from './middlewares/error.middleware.mjs';

dotenv.config();

class Server {
  #app;
  #port;
  #mongoUri;

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT || 3300;
    this.#mongoUri = process.env.MONGO_URI;
    this.#configureMiddleware();
    this.#configureRoutes();
  }

  #configureMiddleware() {
    this.#app.use(cors());
    this.#app.use(express.json());
  }

  #configureRoutes() {
    this.#app.use('/api/certificates', certificateRoutes);
    this.#app.use(ErrorHandler.handle);
  }

  async #connectToMongoDB() {
    try {
      if (!this.#mongoUri) {
        throw new Error('MongoDB URI is missing in environment variables');
      }
      await mongoose.connect(this.#mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error.message);
      throw error;
    }
  }

  async start() { 
    try {
      await this.#connectToMongoDB();
      this.#app.listen(this.#port, () => {
        console.log(`Server running on port ${this.#port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error.message);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();