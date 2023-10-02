const express = require("express");
const router = express.Router();

router.use("/certificate", require("./certificate"));

module.exports = router;
