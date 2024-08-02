const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    // Send back the file path for the frontend
    res.json({ filepath: `/photos/${file.filename}` });
    // access photo http://localhost:5000/photos/1722572860609-logo.jpeg
  } catch (error) {
    res.status(500).json({ error: "Error uploading image" });
  }
};

module.exports = { uploadImage };
