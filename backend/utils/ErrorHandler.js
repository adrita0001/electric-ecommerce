


// class ErrorHandler extends Error {
//     constructor(message, statusCode) {
//       if (new.target === ErrorHandler) {
//         throw new Error('Cannot instantiate ErrorHandler directly. Please use the new keyword.');
//       }
  
//       super(message);
//       this.statusCode = statusCode;
  
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
  
//   module.exports = ErrorHandler;
  
// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.name = this.constructor.name;
//     this.statusCode = statusCode;

//     Error.captureStackTrace(this, this.constructor);
//   }
// }

// module.exports = ErrorHandler;


// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     if (new.target === ErrorHandler) {
//       throw new Error('Cannot instantiate ErrorHandler directly. Please use the new keyword.');
//     }

//     super(message);
//     this.name = this.constructor.name;
//     this.statusCode = statusCode;

//     Error.captureStackTrace(this, this.constructor);
//   }
// }

// // const errorHandler = new ErrorHandler(errorMessage, statusCode);


// module.exports = ErrorHandler;



class ErrorHandler extends Error{
  constructor(message,statusCode){
      super(message);
      this.statusCode = statusCode

      Error.captureStackTrace(this,this.constructor);

  }
  
}
module.exports = ErrorHandler