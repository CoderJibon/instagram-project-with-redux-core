const AsyncHandler = require("express-async-handler");
const User = require("../models/UserModels.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRES,
} = require("../utilities/secret.js");

/**
 * @endPoint user registration method
 * @route user/post
 * @api public
 */
const registration = AsyncHandler(async (req, res) => {
  //get registration data from
  const { name, username, email, password } = req.body;

  //check if registration is valid
  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check email
  const isEmail = await User.findOne({ email: email });

  if (isEmail?.email === email) {
    return res.status(400).json({ message: "This Email Already Exists" });
  }

  //check  username
  const isUserName = await User.findOne({ username: username });
  if (isUserName?.username === username) {
    return res.status(400).json({ message: "This UserName Already Exists" });
  }

  //get registration
  const user = await User.create({ name, username, email, password });

  //respond to send registration
  return res.status(201).json({ user, message: "Registration successfully" });
});

/**
 * @endPoint user login method
 * @route user/post
 * @api public
 */
const login = AsyncHandler(async (req, res) => {
  //get login details
  const { email, password } = req.body;

  //check if registration is valid
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check if email
  const isEmail = await User.findOne({ email: email });
  if (!isEmail) {
    return res.status(400).json({ message: "User Not Found!" });
  }
  // check if password
  const isPass = bcryptjs.compareSync(password, isEmail?.password);
  if (!isPass) {
    return res.status(400).json({ message: "Password Does not Match.." });
  }
  //access token generation
  const accessToken = jwt.sign({ email: isEmail.email }, ACCESS_TOKEN, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });

  // cookie settings
  res.cookie("accessToken", accessToken);

  //user Data
  const data = await User.findOne({ email: email }).select("-password");

  return res.status(200).json({
    user: data,
    message: "Login Success..",
    accessToken: accessToken,
  });
});

/**
 * @endPoint user me method
 * @route me/get
 * @api public
 */

const userMe = AsyncHandler((req, res) => {
  if (!req.me) {
    return res.status(400).json({ message: "invalid authorization!" });
  }
  return res.status(200).json(req.me);
});

/**
 * @endPoint logout auth method
 * @route logout/get
 * @api public
 */
const logout = AsyncHandler((rea, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false,
  });
  return res.status(200).json({ message: "Logout successful.." });
});

// export controller
module.exports = { registration, login, userMe, logout };
