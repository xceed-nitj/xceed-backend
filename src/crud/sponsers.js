const Sponsor = require('../models/sponsors');
const HttpException = require('../models/http-exception');

class SponsorsController {
    // GET /sponsors/conference/:id
    async getSponsorsByConferenceId(req, res) {
        const { id } = req.params;
        try {
            const sponsors = await Sponsor.find({ confId: id });
            res.json(sponsors);
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }

    // GET /sponsors
    async getAllSponsors(req, res) {
        try {
            const sponsors = await Sponsor.find();
            res.json(sponsors);
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }

    // GET /sponsors/:id
    async getSponsorById(req, res) {
        const { id } = req.params;
        try {
            const sponsor = await Sponsor.findById(id);
            if (sponsor) {
                res.json(sponsor);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }

    // POST /sponsors
    async createSponsor(req, res) {
        const newSponsor = req.body;
        try {
            const createdSponsor = await Sponsor.create(newSponsor);
            res.json(createdSponsor);
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }

    // PUT /sponsors/:id
    async updateSponsor(req, res) {
        const { id } = req.params;
        const updatedSponsor = req.body;
        try {
            const sponsor = await Sponsor.findByIdAndUpdate(id, updatedSponsor, { new: true });
            if (sponsor) {
                res.json(sponsor);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }

    // DELETE /sponsors/:id
    async deleteSponsor(req, res) {
        const { id } = req.params;
        try {
            const sponsor = await Sponsor.findByIdAndRemove(id);
            if (sponsor) {
                res.json(sponsor);
            } else {
                res.status(404).json({ error: 'Sponsor not found' });
            }
        } catch (error) {
            throw new HttpException(500, error?.message || 'Internal server error');
        }
    }
}

module.exports = SponsorsController;
