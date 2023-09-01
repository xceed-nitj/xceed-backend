const { Request, Response } = require('express');
const EventDate = require('../models/EventDate');
const HttpException = require('../models/http-exception');

class EventDateController {
  // GET /eventDates/conference/:id
  async getEventDatesByConferenceId(req, res) {
    const { id } = req.params;
    try {
      // Find all EventDate documents that match the confId using the Mongoose model
      const eventDates = await EventDate.find({ confId: id });
      res.json(eventDates);
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }

  // GET /eventDates
  async getAllEventDates(req, res) {
    try {
      // Find all EventDate documents using the Mongoose model
      const eventDates = await EventDate.find();
      res.json(eventDates);
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }

  // GET /eventDates/:id
  async getEventDateById(req, res) {
    const { id } = req.params;
    try {
      // Find an EventDate document by its _id using the Mongoose model
      const eventDate = await EventDate.findById(id);
      if (eventDate) {
        res.json(eventDate);
      } else {
        res.status(404).json({ error: 'EventDate not found' });
      }
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }

  // POST /eventDates
  async createEventDate(req, res) {
    const newEventDate = req.body;
    try {
      // Create a new EventDate document using the Mongoose model
      const createdEventDate = await EventDate.create(newEventDate);
      res.json(createdEventDate);
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }

  // PUT /eventDates/:id
  async updateEventDate(req, res) {
    const { id } = req.params;
    const updatedEventDate = req.body;
    try {
      // Update an EventDate document by its _id using the Mongoose model
      const eventDate = await EventDate.findByIdAndUpdate(id, updatedEventDate, { new: true });
      if (eventDate) {
        res.json(eventDate);
      } else {
        res.status(404).json({ error: 'EventDate not found' });
      }
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }

  // DELETE /eventDates/:id
  async deleteEventDate(req, res) {
    const { id } = req.params;
    try {
      // Delete an EventDate document by its _id using the Mongoose model
      const deletedEventDate = await EventDate.findByIdAndDelete(id);
      if (deletedEventDate) {
        res.json({ message: 'EventDate deleted successfully' });
      } else {
        res.status(404).json({ error: 'EventDate not found' });
      }
    } catch (error) {
      throw new HttpException(500, error.message || 'Internal server error');
    }
  }
}

module.exports = EventDateController;
