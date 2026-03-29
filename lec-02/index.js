// console.log("Hello from index!");
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello backend world!");
});

app.get("/x", (req, res) => {
  res.send("@MadhavCodes");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
