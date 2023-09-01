const Committee = require("../models/committees");
const HttpException = require("../models/http-exception");

class CommitteesController {
  // GET /committees/conference/:id
  async getCommitteesByConferenceId(req, res) {
    const { id } = req.params;
    try {
      // Find committees with a specific ConfId using the Mongoose model
      const committees = await Committee.find({ ConfId: id });
      res.json(committees);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // GET /committees
  async getAllCommittees(req, res) {
    try {
      // Find all committees using the Mongoose model
      const committees = await Committee.find();
      res.json(committees);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // GET /committees/:id
  async getCommitteeById(req, res) {
    const { id } = req.params;
    try {
      // Find a committee by its _id using the Mongoose model
      const committee = await Committee.findById(id);
      if (committee) {
        res.json(committee);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // POST /committees
  async createCommittee(req, res) {
    const newCommittee = req.body;
    try {
      // Create a new committee document using the Mongoose model
      const createdCommittee = await Committee.create(newCommittee);
      res.json(createdCommittee);
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // PUT /committees/:id
  async updateCommittee(req, res) {
    const { id } = req.params;
    const updatedCommittee = req.body;
    try {
      // Update a committee by its _id using the Mongoose model
      const committee = await Committee.findByIdAndUpdate(id, updatedCommittee);
      if (committee) {
        res.json(committee);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }

  // DELETE /committees/:id
  async deleteCommittee(req, res) {
    const { id } = req.params;
    try {
      // Delete a committee by its _id using the Mongoose model
      const committee = await Committee.findByIdAndDelete(id);
      if (committee) {
        res.json(committee);
      } else {
        res.status(404).json({ error: "Committee not found" });
      }
    } catch (error) {
      throw new HttpException(500, error.message || "Internal server error");
    }
  }
}

module.exports = CommitteesController;
