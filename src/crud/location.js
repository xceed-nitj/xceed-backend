const Location = require("../models/location");
const HttpException = require("../models/http-exception");

class LocationController {
    async getLocation(confId) {
        try {
            // Find a Location document that matches the confId using the Mongoose model
            return await Location.findOne({ confId: confId });
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async addLocation(data) {
        try {
            // Create a new Location document using the Mongoose model
            return await Location.create(data);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateLocation(id, data) {
        try {
            // Update a Location document by its _id using the Mongoose model
            return await Location.findByIdAndUpdate(id, data);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteLocation(id) {
        try {
            // Delete a Location document by its _id using the Mongoose model
            return await Location.findByIdAndDelete(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}

module.exports = LocationController;
