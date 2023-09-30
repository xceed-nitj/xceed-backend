const express = require("express");
const CertificateController = require("../controllers/certificate");

const router = express.Router();
const certificateController = new CertificateController();

// GET /certificates
router.get("/", async (req, res) => {
  try {
    const allCertificates = await certificateController.getCertificates();
    res.status(200).json(allCertificates);
  } catch (e) {
    res.status(e?.status || 500).json({ error: e?.message || "Internal Server Error" });
  }
});

// GET /certificates/:id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const certificate = await certificateController.getCertificateById(id);
    res.status(200).json(certificate);
  } catch (e) {
    res.status(e?.status || 500).json({ error: e?.message || "Internal Server Error" });
  }
});

// POST /certificates
router.post("/", async (req, res) => {
  try {
    const newCertificate = req.body;
    await certificateController.addCertificate(newCertificate);
    res.status(201).json({ response: "Certificate created successfully" });
  } catch (e) {
    res.status(e?.status || 500).json({ error: e?.message || "Internal Server Error" });
  }
});

// PUT /certificates/:id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCertificate = req.body;
    await certificateController.updateCertificate(id, updatedCertificate);
    res.status(200).json({ response: "Certificate updated successfully" });
  } catch (e) {
    res.status(e?.status || 500).json({ error: e?.message || "Internal Server Error" });
  }
});

// DELETE /certificates/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await certificateController.deleteCertificate(id);
    res.status(200).json({ response: "Certificate deleted successfully" });
  } catch (e) {
    res.status(e?.status || 500).json({ error: e?.message || "Internal Server Error" });
  }
});

module.exports = router;
