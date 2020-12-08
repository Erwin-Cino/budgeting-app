const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
// Connect Database


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
app.get("/", (req, res) => res.send("API Running"));

//Init middleware
app.use(express.json({ extended: false }));

// Define routes


const PORT = process.env.PORT || 5000; // look for PORT environment, locally PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));