const Image = require("../models/image.model");

const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    // Save file information to MongoDB
    const newImage = new Image({
      filename: file.filename,
      filepath: file.path,
      mimetype: file.mimetype,
      size: file.size,
    });

    // await newImage.save();

    // Send back the file path for the frontend
    res.json({ filepath: `/photos/${file.filename}` });
//  access pahoto http://localhost:5000/photos/1722572860609-logo.jpeg

  } catch (error) {
    res.status(500).json({ error: "Error uploading image" });
  }
};

module.exports = { uploadImage };
