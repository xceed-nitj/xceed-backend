const Conf = require("../models/conf");
const HttpException = require("../models/http-exception");

class ConfController {
  async addConf(conf) {
    if (!conf.email || !conf.email.includes("@")) {
      throw new HttpException(400, "Invalid Email");
    }

    try {
      // Create a new Conf document using the Mongoose model
      const createdConf = await Conf.create(conf);
      return createdConf;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getConfById(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      // Find a Conf document by its _id using the Mongoose model
      const conf = await Conf.findById(id);
      return conf;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getConf() {
    try {
      // Find all Conf documents using the Mongoose model
      const confs = await Conf.find();
      return confs;
    } catch (e) {
      throw aHttpExcepction(500, e.message || "Internal Server Error");
    }
  }

  async updateConf(conf, id) {
    if (!conf.email || !conf.email.includes("@")) {
      throw new HttpException(400, "Invalid Email");
    }

    try {
      // Update a Conf document by its _id using the Mongoose model
      const updatedConf = await Conf.findByIdAndUpdate(id, conf, { new: true });
      return updatedConf;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async deleteConf(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      // Delete a Conf document by its _id using the Mongoose model
      const deletedConf = await Conf.findByIdAndDelete(id);
      return deletedConf;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }
}

module.exports = ConfController;
