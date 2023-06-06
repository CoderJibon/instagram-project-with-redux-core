const dotenv = require("dotenv").config();

// secret key for
const S_PORT = process.env.S_PORT || 4040;
const MONGODB_URL = process.env.MONGODB_URL;

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES;

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES;

//export secret key for
module.exports = {
  S_PORT,
  MONGODB_URL,
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRES,
};
