const Image = require("../models/image.model");

// Upload multiple images
const uploadImages = async (req, res) => {
  try {
    const files = req.files; // Get the uploaded files

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Create an array of file details
    const fileDetails = files.map((file) => ({
      filename: file.filename,
      filepath: `/photos/${file.filename}`,
      mimetype: file.mimetype,
      size: file.size,
    }));

    // Save file details in MongoDB
    await Image.insertMany(fileDetails);

    // Send back the file paths for the frontend
    res.json({ filepaths: fileDetails.map((file) => file.filepath) });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Error uploading images" });
  }
};

// Export the controller functions
module.exports = { uploadImages };
