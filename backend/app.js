// q7HXW6nnmyFJuvH

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/route");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/books", router);

mongoose.connect(
  // "mongodb+srv://sundaram:q7HXW6nnmyFJuvH@cluster0.m6d6fhk.mongodb.net/?retryWrites=true&w=majority"
  "mongodb+srv://sundaram:q7HXW6nnmyFJuvH@cluster0.m6d6fhk.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("an error occurred");
});

db.on("open", () => {
  console.log("connection established successfully");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
