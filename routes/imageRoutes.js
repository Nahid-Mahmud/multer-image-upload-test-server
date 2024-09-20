const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload"); // Adjust the path as necessary
const { uploadImages } = require("../controllers/imageController"); // Ensure this path is correct

// Define the upload route
router.post("/upload", upload.array("images", 10), uploadImages); // Allow up to 10 files

module.exports = router;
