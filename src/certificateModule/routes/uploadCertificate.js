const express = require("express");
//const app = express();
const router = express.Router();
const reader = require('xlsx');
const Certificate = require('../models/certificate');
const multer=require('multer');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

router.post('/', upload.single('csvFile'), (req, res) => {
    const filePath = req.file.path;
    // Reading our excel file
    const file = reader.readFile(filePath)

    let data = []

    const sheetsArray = file.SheetNames; // sheetsArray contains names of all sheets 


    for (let i = 0; i < sheetsArray.length; i++) {
        const sheet = reader.utils.sheet_to_json(
            file.Sheets[sheetsArray[i]])
        sheet.forEach((row) => {
            console.log(row);

            const certificate = new Certificate(row);
            certificate.save();

            data.push(row);
        })
    }
    res.send('CSV file uploaded and data has been logged to console.');

});



module.exports = router;