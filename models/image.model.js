const mongoose = require("mongoose");

// Define the image schema
const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
});

// Export the Image model
module.exports = mongoose.model("Image", imageSchema);
