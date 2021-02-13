const express = require("express");
const router = express.Router();

// @routes api/auth
router.use("/auth", require("./auth"));

// @routes api/story
router.use("/story", require("./story"));

module.exports = router;
