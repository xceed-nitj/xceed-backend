const mongoose = require("mongoose");


const certificateSchema = new mongoose.Schema({
  instituteName: {
    type: String,
    required: true,
  },
  conferenceName: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  logos: [String], // Assuming logos is an array of URLs or file paths
  mainContent: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  signatureName: {
    type: String,
    required: true,
  },
  signatureDesign: {
    type: String,
    required: true,
  },
  confid: {
    type: String,
    required: true,
  },
});


const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
