const express = require("express");
const cors = require("cors");
const path = require("path");
const imageRoutes = require("./routes/imageRoutes");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}));

const port = process.env.PORT || 5000;

app.use("/api", imageRoutes);
app.use("/photos", express.static(path.join(__dirname, "public/photos")));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
