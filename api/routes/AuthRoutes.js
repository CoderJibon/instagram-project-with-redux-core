const express = require("express");
const {
  registration,
  login,
  userMe,
  logout,
} = require("../controllers/AuthControllers.js");
const authVerify = require("../middleware/authVerify.js");

//router initialization
const authRoute = express.Router();
authRoute.route("/me").get(authVerify, userMe);
authRoute.route("/registration").post(registration);
authRoute.route("/login").post(login);
authRoute.route("/logout").get(logout);

//export routes
module.exports = authRoute;
