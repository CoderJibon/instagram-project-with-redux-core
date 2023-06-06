const mongoose = require("mongoose");
const colors = require("colors");
const { MONGODB_URL } = require("../utilities/secret.js");

// mongodb connection
const mongodbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(`Database connection established...`.bgBlue.white);
  } catch (error) {
    console.log(`server error `.bgRed.white);
  }
};

//export connection
module.exports = mongodbConnection;
