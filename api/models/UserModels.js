const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

//create  user schema
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (p) => {
        return bcryptjs.hashSync(p, bcryptjs.genSaltSync(10));
      },
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    post: {
      type: Array,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// export default userSchema
module.exports = mongoose.model("User", UserSchema);
