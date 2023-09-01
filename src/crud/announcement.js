const Announcement = require("../models/announcement");
const HttpException = require("../models/http-exception");

class AnnouncementController {
  async addAnnouncement(announcement) {
    try {
      // Create a new Announcement document using the Mongoose model
      const newAnnouncement = new Announcement(announcement);
      await newAnnouncement.save();
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getAnnouncementById(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Find an Announcement document by its _id using the Mongoose model
      return await Announcement.findById(id);
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getAnnouncementByConfId(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Find Announcement documents with a specific confId using the Mongoose model
      return await Announcement.find({ confId: id });
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getAllAnnouncements() {
    try {
      // Find all Announcement documents using the Mongoose model
      return await Announcement.find();
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async updateAnnouncement(id, announcement) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Update an Announcement document by its _id using the Mongoose model
      await Announcement.findByIdAndUpdate(id, announcement);
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async deleteAnnouncement(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    try {
      // Delete an Announcement document by its _id using the Mongoose model
      await Announcement.findByIdAndDelete(id);
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }
}

module.exports = AnnouncementController;
