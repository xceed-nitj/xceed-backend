const Awards = require("../models/awards");
const HttpException = require("../models/http-exception");

class AwardsController {
  // GET /awards/conference/:id
  async getAwardsByConferenceId(req, res) {
    const { id } = req.params;
    try {
      // Find awards with a specific confId using the Mongoose model
      const awards = await Awards.find({ confId: id });
      res.json(awards);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  } 

  // GET /awards
  async getAllAwards(req, res) {
    try {
      // Find all awards using the Mongoose model
      const awards = await Awards.find();
      res.json(awards);
    } catch (error) {
      throw aHttpException(500, error.message || "Internal server error");
    }
  }

  // GET /awards/:id
  async getAwardById(req, res) {
    const { id } = req.params;
    try {
      // Find an award by its _id using the Mongoose model
      const award = await Awards.findById(id);
      if (award) {
        res.json(award);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // POST /awards
  async createAward(req, res) {
    const newAward = req.body;
    try {
      // Create a new award document using the Mongoose model
      const createdAward = await Awards.create(newAward);
      res.json(createdAward);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // PUT /awards/:id
  async updateAward(req, res) {
    const { id } = req.params;
    const updatedAward = req.body;
    try {
      // Update an award by its _id using the Mongoose model
      const award = await Awards.findByIdAndUpdate(id, updatedAward);
      if (award) {
        res.json(award);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // DELETE /awards/:id
  async deleteAward(req, res) {
    const { id } = req.params;
    try {
      // Delete an award by its _id using the Mongoose model
      const award = await Awards.findByIdAndDelete(id);
      if (award) {
        res.json(award);
      } else {
        res.status(404).json({ error: "Award not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }
}

module.exports = AwardsController;
