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
    console.error('Error:', error.stack);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ error: message });
  }
}
