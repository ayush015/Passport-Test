const express = require("express");
const router = express.Router();

const { test, testGet } = require("../controller/test");

router.post("/test", test);
router.get("/testget", testGet);
module.exports = router;
