const Home = require("../models/home");
const HttpException = require("../models/http-exception");

class HomeController {
    async addHome(home) {
        try {
            // Create a new Home document using the Mongoose model
            await Home.create(home);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHomeByConfId(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Find a Home document that matches the confId using the Mongoose model
            return await Home.findOne({ confId: id });
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHomeById(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Find a Home document by its _id using the Mongoose model
            return await Home.findById(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getHome() {
        try {
            // Find all Home documents using the Mongoose model
            return await Home.find();
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateHome(home, id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }
        
        try {
            // Update a Home document by its _id using the Mongoose model
            await Home.findByIdAndUpdate(id, home);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteHome(id) {
        if (!id) {
            throw aHttpException(400, "Invalid Id");
        }

        try {
            // Delete a Home document by its _id using the Mongoose model
            await Home.findByIdAndDelete(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}

module.exports = HomeController;
