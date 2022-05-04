const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  dropDB,
  dropCollection,
} = require("../controller/auth");

router.post("/signup", signup);
router.get("/signin", signin);
router.get("/dropDB", dropDB);
router.get("/dropCollection/:collectionName", dropCollection);
module.exports = router;
