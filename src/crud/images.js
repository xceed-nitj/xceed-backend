const Image = require("../models/images");
const HttpException = require("../models/http-exception");

class ImagesController {
    async addImage(image) {
        try {
            // Create a new Image document using the Mongoose model
            await Image.create(image);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getImagesByConfId(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Find Image documents that match the confId using the Mongoose model
            return await Image.find({ confId: id });
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateImage(id, image) {
        try {
            // Update an Image document by its _id using the Mongoose model
            await Image.findByIdAndUpdate(id, image);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteImage(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Delete an Image document by its _id using the Mongoose model
            await Image.findByIdAndDelete(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}

module.exports = ImagesController;
