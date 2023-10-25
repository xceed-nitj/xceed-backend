const express = require("express");
const router = express.Router();
const { register, login, update } = require("./auth");
router.route("/login").post(login);
router.route("/update").put(update);
// router.route("/register").post(register);
router.post("/register", register);
const { sendOTP } = require("./auth");
router.post("/otp", sendOTP);

module.exports = router;
