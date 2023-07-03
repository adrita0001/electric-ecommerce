


class ErrorHandler extends Error {
    constructor(message, statusCode) {
      if (new.target === ErrorHandler) {
        throw new Error('Cannot instantiate ErrorHandler directly. Please use the new keyword.');
      }
  
      super(message);
      this.statusCode = statusCode;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ErrorHandler;
  