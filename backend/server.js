const app = require('./app');
const connectDatabase = require('./db/Database');



// database connect 

connectDatabase();


// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
  });

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);
  
    server.close(() => {
      process.exit(1);
    });
 });


  // config
  if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }

  // creating server 
  const server = app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}`
    );
  });
  