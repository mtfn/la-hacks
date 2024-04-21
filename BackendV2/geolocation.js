// INSTRUCTIONS TO RUN:
// 1) node geolocation.js
// 2) Double click imageuploader.html file to open in browser 
// 3) Upload image and look in imageData.json for output

const express = require('express');
const multer = require('multer');
const { exiftool } = require('exiftool-vendored');
const path = require('path');
const fs = require('fs');
const { PythonShell } = require('python-shell');
const { areCoordinatesWithinRadius } = require('./distancealgorithm');
const app = express();
const port = 4009;
const cors = require('cors');

app.use(cors());
app.use('/imageUploads', express.static('imageUploads'));
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
const testDBPath = './testDB.json'; 

function readTestDB() {
    return JSON.parse(fs.readFileSync(testDBPath, 'utf8'));
}

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

        const referenceImages = readTestDB();
        const referenceImage = referenceImages[0]; // Select desired image from testDB array here

        const distanceMiles = areCoordinatesWithinRadius(referenceImage.location.latitude, referenceImage.location.longitude, gpsData.latitude, gpsData.longitude, Number.MAX_SAFE_INTEGER).distanceMiles;

        PythonShell.run('img_description.py', { args: [req.file.path] }, async (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Failed to generate description for uploaded image.");
            }
            const userImageDescription = results[0];

            PythonShell.run('compare_strings.py', { args: [referenceImage.description, userImageDescription] }, async (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Failed to compare image descriptions.");
                }
                const similarityScore = results[0];

                const uploadedImageData = {
                    imagePath: req.file.path.replace(/^imageUploads\//, ''),
                    location: gpsData,
                    description: userImageDescription
                };

                // Store or use uploadedImageData as needed
                console.log(`Distance: ${distanceMiles} miles, Similarity: ${similarityScore}`);

                res.json({ 
                    message: "Image processed successfully", 
                    distanceScore: distanceMiles, 
                    similarityScore: similarityScore, 
                    uploadedImage: uploadedImageData
                });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to process uploaded image.');
    } finally {
        await exiftool.end().catch(console.error);
    }
});

app.get('/images', (req, res) => {
    // This endpoint could be adjusted to return images from testDB.json
    const imagesData = readTestDB();
    res.json(imagesData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
