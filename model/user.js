import mongoose from "mongoose";

const User = new mongoose({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  encryptPassword: {
    type: String,
  },
  salt: String,
});

module.exports = mongoose.model("User", User);
