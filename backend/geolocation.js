// const express = require('express');
// const multer = require('multer');
// const { exiftool } = require('exiftool-vendored');
// const app = express();
// const port = 3000;


// const upload = multer({ dest: 'uploads/' });


// app.post('/upload', upload.single('photo'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   try {

//     const metadata = await exiftool.read(req.file.path);

//     // Extract GPS data
//     const gpsData = {
//       latitude: metadata.GPSLatitude,
//       longitude: metadata.GPSLongitude,
//     };


//     if (gpsData.latitude && gpsData.longitude) {
//       res.json(gpsData);
//     } else {
//       res.status(404).send('Geolocation data not found in image.');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to extract metadata.');
//   } finally {

//     await exiftool.end().catch(console.error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

const express = require('express');
const multer = require('multer');
const { exiftool } = require('exiftool-vendored');
const { areCoordinatesWithinRadius } = require('./distancealgorithm'); // Import the function
const app = express();
const port = 3000;


const upload = multer({ dest: 'uploads/' });


const originalLat = 40.070433;
const originalLon = -118.446769;
const radiusMiles = 0.1;

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

    if (gpsData.latitude && gpsData.longitude) {

      const isWithinRadius = areCoordinatesWithinRadius(originalLat, originalLon, gpsData.latitude, gpsData.longitude, radiusMiles);


      res.json({
        ...gpsData,
        isWithinRadius: isWithinRadius 
      });
    } else {
      res.status(404).send('Geolocation data not found in image.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to extract metadata.');
  } finally {
    await exiftool.end().catch(console.error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
