const express = require("express");

const mongoose = require("mongoose");

const path = require("path");

const app = express();

const port = 8000;

const pathDirectory = path.join(__dirname, "public");

// Configure Mongoose to Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017/node-cms", {
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("Database Connection Failed");
  });

// Configure Express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(pathDirectory));
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

// Routes
app.use("/", (req, res) => {
  res.send("Welcome to Node CMS App");
});
