const mongoose = require("mongoose");

// Define your Mongoose schema based on the interface
const announcementSchema = new mongoose.Schema({
  confId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  metaDescription: String,
  description: {
    type: String,
    required: true,
  },
  feature: {
    type: Boolean,
    required: true,
  },
  sequence: {
    type: Number,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  hidden: {
    type: Boolean,
    required: true,
  },
  link: String,
});

// Create the Mongoose model
const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
