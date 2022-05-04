const User = require("../model/user");
var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.signup = (req, res) => {
  User.register(
    new User({ name: req.body.name, email: req.body.email }),
    req.body.password,
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(user);
    }
  );
};

exports.signin = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.json({ success: false, message: err });
    }
    req.login(user, (err) => {
      if (err) {
        return res.json({ error: "email and password did not match" });
      }
      const { email, name, _id } = user;
      return res.json({ _id, name, email });
    });
  })(req, res);
};

exports.dropDB = (req, res) => {
  mongoose.connection.db.dropDatabase((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
        message: "There was some problem in dropping database",
      });
    }
    return res.json({
      result: result,
      message: "DB dropped Successfully",
    });
  });
};

exports.dropCollection = (req, res) => {
  const collection = req.params.collectionName;
  mongoose.connection.db.dropCollection(`${collection}`, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
        message: `There was some problem in dropping ${collection}`,
      });
    }
    return res.json({
      result: result,
      message: "Collection dropped Successfully",
    });
  });
};
