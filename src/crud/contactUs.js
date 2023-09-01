const ContactUs = require('../models/contactUs');
const HttpException = require('../models/http-exception');

class ContactUsController {
  async getAllContacts(confId) {
    try {
      // Find all contact documents that match the confId using the Mongoose model
      const contacts = await ContactUs.find({ confId });
      return contacts;
    } catch (e) {
      throw new HttpException(500, e.message || 'Internal Server Error');
    }
  }

  async addContact(data) {
    try {
      // Create a new ContactUs document using the Mongoose model
      const createdContact = await ContactUs.create(data);
      return createdContact;
    } catch (e) {
      throw new HttpException(500, e.message || 'Internal Server Error');
    }
  }

  async updateContact(id, data) {
    try {
      if (!id) {
        throw new HttpException(400, 'Contact ID is required');
      }
      // Update a ContactUs document by its _id using the Mongoose model
      const updatedContact = await ContactUs.findByIdAndUpdate(id, data, { new: true });
      if (!updatedContact) {
        throw new HttpException(404, 'Contact not found');
      }
      return updatedContact;
    } catch (e) {
      throw new HttpException(500, e.message || 'Internal Server Error');
    }
  }

  async deleteContact(id) {
    try {
      if (!id) {
        throw new HttpException(400, 'Contact ID is required');
      }
      // Delete a ContactUs document by its _id using the Mongoose model
      const deletedContact = await ContactUs.findByIdAndDelete(id);
      if (!deletedContact) {
        throw new HttpException(404, 'Contact not found');
      }
      return deletedContact;
    } catch (e) {
      throw new HttpException(500, e.message || 'Internal Server Error');
    }
  }
}

module.exports = ContactUsController;
