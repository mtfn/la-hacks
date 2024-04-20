const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  },
  location: {
    lat: Number,
    lon: Number
  },
  imageId: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);

