const Speaker = require("../models/speakers");
const HttpException = require("../models/http-exception");

class SpeakersController {
    // GET /speakers/conference/:id
    async getSpeakersByConferenceId(req, res) {
        const { id } = req.params;
        try {
            const speakers = await Speaker.find({ ConfId: id });
            res.json(speakers);
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }

    // GET /speakers
    async getAllSpeakers(req, res) {
        try {
            const speakers = await Speaker.find();
            res.json(speakers);
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }

    // GET /speakers/:id
    async getSpeakerById(req, res) {
        const { id } = req.params;
        try {
            const speaker = await Speaker.findById(id);
            if (speaker) {
                res.json(speaker);
            } else {
                res.status(404).json({ error: "Speaker not found" });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }

    // POST /speakers
    async createSpeaker(req, res) {
        const newSpeaker = req.body;
        try {
            const createdSpeaker = await Speaker.create(newSpeaker);
            res.json(createdSpeaker);
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }

    // PUT /speakers/:id
    async updateSpeaker(req, res) {
        const { id } = req.params;
        const updatedSpeaker = req.body;
        try {
            const speaker = await Speaker.findByIdAndUpdate(id, updatedSpeaker, { new: true });
            if (speaker) {
                res.json(speaker);
            } else {
                res.status(404).json({ error: "Speaker not found" });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }

    // DELETE /speakers/:id
    async deleteSpeaker(req, res) {
        const { id } = req.params;
        try {
            const speaker = await Speaker.findByIdAndRemove(id);
            if (speaker) {
                res.json(speaker);
            } else {
                res.status(404).json({ error: "Speaker not found" });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || "Internal server error");
        }
    }
}

module.exports = SpeakersController;
