const express = require("express");
const router = express.Router();

router.use("/certificate", require("./certificate"));
router.use("/upload", require("./uploadCertificate"));

module.exports = router;
