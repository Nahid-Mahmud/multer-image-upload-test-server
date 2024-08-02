const express = require("express");
const mongoose = require("mongoose");
const imageRoutes = require("./routes/imageRoutes");

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = process.env.PORT || 5000;

// mongoose.connect("your-mongo-db-connection-string", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use("/api", imageRoutes);
app.use("/photos", express.static("public/photos"));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
