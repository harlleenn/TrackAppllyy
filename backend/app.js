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

app.post('/resume', upload.single('resumeImage'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    if (fileType === 'application/pdf') {
      const pdfBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(pdfBuffer);
      console.log("PDF Text:", data.text);
      res.json({ text: data.text });

    } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const result = await mammoth.extractRawText({ path: filePath });
      console.log("DOCX Text:", result.value);
      res.json({ text: result.value });

    } else {
      const text = fs.readFileSync(filePath, 'utf8');
      console.log("Plain Text:", text);
      res.json({ text });
    }

  } catch (err) {
    console.error("Error parsing file:", err);
    res.status(500).json({ error: 'Failed to read resume file' });
  }
});


app.listen(Port, () => console.log(`Server is running on port ${Port}`));
