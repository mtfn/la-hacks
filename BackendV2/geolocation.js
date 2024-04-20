// INSTRUCTIONS TO RUN:
// 1) node geolocation.js
// 2) Double click imageuploader.html file to open in browser 
// 3) Upload image and look in imageData.json for output

const express = require('express');
const multer = require('multer');
const { exiftool } = require('exiftool-vendored');
const mongoose = require('mongoose');
const Image = require('./imageModel');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 4009;
const cors = require('cors');

app.use('/imageUploads', express.static('imageUploads'));

const atlasUri = 'mongodb+srv://aryamandayal9:J8GqhfuiOyy0sv42@cluster0.lxmoqjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'imageUploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('photo'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const metadata = await exiftool.read(req.file.path);
        const gpsData = {
            latitude: metadata.GPSLatitude,
            longitude: metadata.GPSLongitude,
        };

        const imageId = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        
        const imagePath = req.file.path;
        
        const newImage = await Image.create({
            imagePath: imagePath,
            location: gpsData,
            imageId: imageId
        });

        const dataFile = 'imageData.json';
        fs.readFile(dataFile, (err, data) => {
            let images = [];
            if (!err && data.length) {
                images = JSON.parse(data.toString());
            }
            images.push({ imagePath, location: gpsData, imageId });
            fs.writeFile(dataFile, JSON.stringify(images, null, 2), err => {
                if (err) {
                    console.error('Failed to update image data file:', err);
                    return res.status(500).send('Failed to update image data file.');
                }
                res.json({ message: "Image uploaded successfully", imageData: newImage });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to extract metadata or save image.');
    } finally {
        await exiftool.end().catch(console.error);
    }
});

app.get('/images', (req, res) => {
    const dataFile = 'imageData.json';
    fs.readFile(dataFile, (err, data) => {
        if (err) {
            console.error('Failed to read image data file:', err);
            return res.status(500).send('Failed to read image data file.');
        }
        res.json(JSON.parse(data.toString()));
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});










