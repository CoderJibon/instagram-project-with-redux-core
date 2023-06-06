const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_EXPIRES } = require("../utilities/secret.js");
const expressAsyncHandler = require("express-async-handler");
const { ACCESS_TOKEN } = require("../utilities/secret.js");
const UserModels = require("../models/UserModels.js");

//check authentication
const authVerify = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if (!token) {
    return res.status(200).json({ message: "Invalid authorization" });
  }
  const tokenSecret = token.split(" ")[1];
  if (token) {
    jwt.verify(
      tokenSecret,
      ACCESS_TOKEN,
      expressAsyncHandler(async (err, decoded) => {
        if (err) {
          res.clearCookie("accessToken");
          return res.status(400).json({ message: "Invalid Token" });
        }
        const user = await UserModels.findOne({ email: decoded.email }).select(
          "-password"
        );
        req.me = user;
        next();
      })
    );
  }
};

// export default authVerify
module.exports = authVerify;
