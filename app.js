const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();

const newPort = 5000;

const userRoute = require(__dirname + "/routes/user");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/PassportTestDB");
// };

// app.use("/api", userRoute);

// main()
//   .then(() => {
//     console.log(`DB connection successful`);
//   })
//   .catch((err) => {
//     console.log(`There was some error ${err}`);
//   });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// app.listen(port);

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
