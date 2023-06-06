const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/AuthRoutes.js");
const userRoute = require("./routes/UserRoutes.js");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler.js");

//server configuration
const app = express();

//middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// static folder for
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);

//error handler
app.use(errorHandler);

//app exports
module.exports = app;
