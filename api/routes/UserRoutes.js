const express = require("express");
const { getAllUser } = require("../controllers/userControllers.js");

//router initialization
const userRoute = express.Router();

userRoute.route("/").get(getAllUser);

//export routes
module.exports = userRoute;
