// INSTRUCTIONS TO RUN:
// 1) node geolocation.js
// 2) Double click imageuploader.html file to open in browser 
// 3) Upload image and look in imageData.json for output

//WITHOUT CHILD PROCESS
const express = require('express');
const multer = require('multer');
const { exiftool } = require('exiftool-vendored');
const path = require('path');
const fs = require('fs');
const { PythonShell } = require('python-shell');
const { areCoordinatesWithinRadius } = require('./distancealgorithm');
const app = express();
const port = 4009;
const {GoogleGenerativeAI} = require('@google/generative-ai');
let genAI;
app.use('/imageUploads', express.static('imageUploads'));
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'imageUploads/'),
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });
const testDBPath = './testDB.json'; // Adjust if necessary
const referenceImages = require(testDBPath);

const runPythonScript = (scriptPath, args = []) => {
    return new Promise((resolve, reject) => {
        PythonShell.run(scriptPath, { args }, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

app.post('/upload', upload.single('photo'), async (req, res) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    try {
        const metadata = await exiftool.read(req.file.path);
        const gpsData = { latitude: metadata.GPSLatitude, longitude: metadata.GPSLongitude };

        if(req.query.id == undefined){
            res.status(400).send('No id provided.');
            return;
        }

        // walk through the reference images and find the one with the matching id
        let referenceImage;
        for(let i = 0; i < referenceImages.length; i++){
            if(referenceImages[i].id === req.query.id){
                referenceImage = referenceImages[i];
                break;
            }
        }
        if(referenceImage == undefined){
            res.status(400).send('No reference image found with the provided id.');
            return;
        }


        const distanceResult = areCoordinatesWithinRadius(referenceImage.location.latitude, referenceImage.location.longitude, gpsData.latitude, gpsData.longitude, Number.MAX_SAFE_INTEGER);
        console.log(`Distance calculation completed: ${distanceResult.distanceMiles} miles`);

        const geminiModel = req.app.locals.ai.getGenerativeModel({model: 'gemini-pro-vision'});
        const prompt = "Consider the objects in these two images and assign a score between 1 and 5 inclusive based on how similar they are. If for any reason you are unable to do this, assign a random score between 1 and 5 inclusive. Write either 1, 2, 3, 4, or 5, do not spell out the number.";
        const fileDataInput = {inlineData: { data: Buffer.from(await fs.promises.readFile(req.file.path)).toString('base64'), mimeType: 'image/jpeg' }};
        const fileDataExpected = {inlineData: { data: Buffer.from(await fs.promises.readFile(`${referenceImage.imagePath}.jpg`)).toString('base64'), mimeType: 'image/jpeg' }};
        const userImageDescription = (await (await geminiModel.generateContent([prompt, fileDataInput, fileDataExpected])).response).text();
        console.log(`Image description completed: ${userImageDescription}`);

        /*const similarityResults = await runPythonScript('compare_strings.py', [referenceImage.description, userImageDescription[0]]);
        console.log(`Similarity calculation completed: ${similarityResults[0]}`);*/

        res.json({
            message: "Image processed successfully",
            distanceScore: distanceResult.distanceMiles,
            //similarityScore: similarityResults[0]
        });
    } catch (error) {
        console.error("An error occurred during image processing:", error);
        res.status(500).send('Failed to process uploaded image.');
    } finally {
        await exiftool.end();
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    app.locals.ai = new GoogleGenerativeAI("AIzaSyA0WBx3-Y12rzKIwNDMlpC_mPlFDSL1xHM");
});

//OLDER VERSION
// const express = require('express');
// const multer = require('multer');
// const { exiftool } = require('exiftool-vendored');
// const path = require('path');
// const fs = require('fs');
// const { PythonShell } = require('python-shell');
// const { areCoordinatesWithinRadius } = require('./distancealgorithm');
// const app = express();
// const port = 4009;
// const cors = require('cors');

// app.use(cors());
// app.use('/imageUploads', express.static('imageUploads'));
// app.use(express.json());

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'imageUploads/');
//     },
//     filename: function(req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

// const upload = multer({ storage: storage });
// const testDBPath = './testDB.json'; 

// function readTestDB() {
//     return JSON.parse(fs.readFileSync(testDBPath, 'utf8'));
// }

// app.post('/upload', upload.single('photo'), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     try {
//         const metadata = await exiftool.read(req.file.path);
//         const gpsData = {
//             latitude: metadata.GPSLatitude,
//             longitude: metadata.GPSLongitude,
//         };

//         const referenceImages = readTestDB();
//         const referenceImage = referenceImages[0]; // Select desired image from testDB array here

//         const distanceMiles = areCoordinatesWithinRadius(referenceImage.location.latitude, referenceImage.location.longitude, gpsData.latitude, gpsData.longitude, Number.MAX_SAFE_INTEGER).distanceMiles;

//         PythonShell.run('img_description.py', { args: [req.file.path] }, async (err, results) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Failed to generate description for uploaded image.");
//             }
//             const userImageDescription = results[0];

//             PythonShell.run('compare_strings.py', { args: [referenceImage.description, userImageDescription] }, async (err, results) => {
//                 if (err) {
//                     console.log(err);
//                     return res.status(500).send("Failed to compare image descriptions.");
//                 }
//                 const similarityScore = results[0];

//                 const uploadedImageData = {
//                     imagePath: req.file.path.replace(/^imageUploads\//, ''),
//                     location: gpsData,
//                     description: userImageDescription
//                 };

//                 // Store or use uploadedImageData as needed
//                 console.log(`Distance: ${distanceMiles} miles, Similarity: ${similarityScore}`);

//                 res.json({ 
//                     message: "Image processed successfully", 
//                     distanceScore: distanceMiles, 
//                     similarityScore: similarityScore, 
//                     uploadedImage: uploadedImageData
//                 });
//             });
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Failed to process uploaded image.');
//     } finally {
//         await exiftool.end().catch(console.error);
//     }
// });

// app.get('/images', (req, res) => {
//     // This endpoint could be adjusted to return images from testDB.json
//     const imagesData = readTestDB();
//     res.json(imagesData);
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });
