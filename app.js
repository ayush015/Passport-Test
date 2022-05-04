const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const passport = require("passport");
const session = require("express-session");

const userRoute = require(__dirname + "/routes/user");
const authRoute = require(__dirname + "/routes/auth");

const developmentDB = "mongodb://localhost:27017/PassportTestDB";
const productionDB =
  "mongodb+srv://AndroidTest:ayush@cluster0.uivzc.mongodb.net/passportTestDB?retryWrites=true&w=majority";
app.use(bodyParser.json());
app.use(
  session({
    secret: "i love to hide stuff.",
    resave: false,
    saveUninitialized: false,
  })
);
const newPort = 5000;
app.use(passport.initialize());
app.use(passport.session());

const main = async () => {
  await mongoose.connect(productionDB);
};

app.use("/api", userRoute);
app.use("/api", authRoute);

main()
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((err) => {
    console.log(`There was some error ${err}`);
  });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
