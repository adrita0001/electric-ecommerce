
const express = require('express');
const app = express();
const ErrorHandler = require('./utils/ErrorHandler');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");



app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("uploads"));

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}




// Error handling
app.use((err, req, res, next) => {
  // Check if the error is an instance of ErrorHandler
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    // Handle other errors
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// import routes

const user = require("./controller/user");

// ...

app.use("/api/v2/users", user);





module.exports = app;
