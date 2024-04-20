const fetch = require('node-fetch');

const latitude = 33.691820;
const longitude = -117.733110;
const apiKey = 'b509a2da9f7744838c1d8e02c2413a62'; 

const requestOptions = {
  method: 'GET',
};

const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.features && result.features.length > 0) {
      const address = result.features[0].properties.formatted;
      console.log(`Address: ${address}`);
    } else {
      console.log("No address found for the given coordinates.");
    }
  })
  .catch(error => console.log('error', error));
