function areCoordinatesWithinRadius(originalLat, originalLon, inputLat, inputLon, radiusMiles) {
    const earthRadiusMiles = 3958.8; 

    const dLat = degreesToRadians(inputLat - originalLat);
    const dLon = degreesToRadians(inputLon - originalLon);
    const lat1 = degreesToRadians(originalLat);
    const lat2 = degreesToRadians(inputLat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const distance = earthRadiusMiles * c;

    return distance <= radiusMiles;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

module.exports = { areCoordinatesWithinRadius };

// Test Example
const originalLat = 34.070433;
const originalLon = -118.446769;
const inputLat = 34.070433;
const inputLon = -199.446769;
const radiusMiles = 0.1;

const isWithinRadius = areCoordinatesWithinRadius(originalLat, originalLon, inputLat, inputLon, radiusMiles);

console.log(isWithinRadius); 
