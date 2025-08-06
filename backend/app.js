const express = require('express');
const app = express();
const cors = require('cors');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse'); // if handling PDFs
const mammoth = require('mammoth');

const internshipRoutes = require('./routes/internship');
const Port = 3000;

// Create storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'resume')); // safer and valid path
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/internship', internshipRoutes);

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
