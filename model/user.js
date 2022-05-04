const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    salt: String,
  },
  { timestamps: true }
);
User.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", User);
