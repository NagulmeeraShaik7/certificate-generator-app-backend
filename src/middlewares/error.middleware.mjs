export class ErrorHandler {
  static handle(error, req, res, next) {
    console.error('Error:', error.stack);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ error: message });
  }
} 