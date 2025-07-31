import { ERROR_MESSAGES, HTTP_STATUS, RESPONSE_KEYS, LOG_MESSAGES } from '../infrastructures/constants/constants.mjs';

/**
 * Centralized error handling middleware for Express applications.
 */
export class ErrorHandler {
  /**
   * Express error-handling middleware function.
   *
   * Logs the error and sends a JSON response with the error message and status code.
   *
   * @param {Error} error - The error object caught in the middleware.
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @param {import('express').NextFunction} next - The Express next middleware function.
   */
  static handle(error, req, res, next) {
    console.error(LOG_MESSAGES.ERROR, error.stack);
    const status = error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const message = error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    res.status(status).json({ [RESPONSE_KEYS.ERROR]: message });
  }
}
