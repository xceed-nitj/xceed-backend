const Participant = require("../models/participant");
const HttpException = require("../models/http-exception");

class ParticipantController {
    async addParticipant(participant) {
        try {
            // Create a new Participant document using the Mongoose model
            return await Participant.create(participant);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getParticipantById(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Find a Participant document by _id using the Mongoose model
            return await Participant.findById(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getParticipant() {
        try {
            // Find all Participant documents using the Mongoose model
            return await Participant.find();
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async getParticipantByConfId(id) {
        try {
            // Find Participant documents that match the confId using the Mongoose model
            return await Participant.find({ confId: id });
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async updateParticipant(participant, id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }
        
        try {
            // Update a Participant document by _id using the Mongoose model
            return await Participant.findByIdAndUpdate(id, participant);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }

    async deleteParticipant(id) {
        if (!id) {
            throw new HttpException(400, "Invalid Id");
        }

        try {
            // Delete a Participant document by _id using the Mongoose model
            return await Participant.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException(500, e?.message || "Internal Server Error");
        }
    }
}

module.exports = ParticipantController;
