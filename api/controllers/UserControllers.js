const AsyncHandler = require("express-async-handler");
const UserModels = require("../models/UserModels.js");

/**
 * @endPoint GEt All Users
 * @route user/Get
 * @api public
 */
const getAllUser = AsyncHandler(async (req, res) => {
  const user = await UserModels.find();
  res.status(200).json(user);
});

/**
 * @endPoint Crete user Post
 * @route user/post
 * @api public
 */
const createPost = AsyncHandler(async (req, res) => {
  const user = await UserModels.find();
  res.status(200).json(user);
});

// export controller
module.exports = { getAllUser, createPost };
