const Navbar = require("../models/navbar");
const HttpException = require("../models/http-exception");

class NavbarController {
    async addNavbar(navbar) {
        try {
            // Create a new Navbar document using the Mongoose model
            return await Navbar.create(navbar);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getNavbarById(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Find a Navbar document by _id using the Mongoose model
            return await Navbar.findById(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getNavbarByConfId(id) {
        if (!id) {
            throw aHttpException(400, "Invalid Id");
        }

        try {
            // Find a Navbar document that matches the confId using the Mongoose model
            return await Navbar.findOne({ confId: id });
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getNavbar() {
        try {
            // Find all Navbar documents using the Mongoose model
            return await Navbar.find();
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateNavbar(navbar, id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Update a Navbar document by _id using the Mongoose model
            return await Navbar.findByIdAndUpdate(id, navbar);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteNavbar(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Delete a Navbar document by _id using the Mongoose model
            return await Navbar.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}

module.exports = NavbarController;
