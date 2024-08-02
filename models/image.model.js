const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  mimetype: String,
  size: Number,
});

module.exports = mongoose.model('Image', imageSchema);
