const Certificate = require("../models/certificate");
const HttpException = require("../models/http-exception");

class CertificateController {
  async addCertificate(certificate) {
    if (!isValidCertificate(certificate)) {
      throw new HttpException(400, "Invalid certificate data");
    }

    try {
      // Create a new Certificate document using the Mongoose model
      const createdCertificate = await Certificate.create(certificate);
      return createdCertificate;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getCertificateById(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      // Find a Certificate document by its _id using the Mongoose model
      const certificate = await Certificate.findById(id);

      if (!certificate) throw new HttpException(400, "Certificate does not exist");

      return certificate;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async getCertificates() {
    try {
      // Find all Certificate documents using the Mongoose model
      const certificates = await Certificate.find();
      return certificates;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async updateCertificate(certificate, id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }
    if (!isValidCertificate(certificate)) {
      throw new HttpException(400, "Invalid Certificate data");
    }

    try {
      // Update a Certificate document by its _id using the Mongoose model
      const updatedCertificate = await Certificate.findByIdAndUpdate(id, certificate, { new: true });
      return updatedCertificate;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }

  async deleteCertificate(id) {
    if (!id) {
      throw new HttpException(400, "Invalid Id");
    }

    try {
      // Delete a Certificate document by its _id using the Mongoose model
      const deletedCertificate = await Certificate.findByIdAndDelete(id);
      return deletedCertificate;
    } catch (e) {
      throw new HttpException(500, e.message || "Internal Server Error");
    }
  }
}

module.exports = CertificateController;


