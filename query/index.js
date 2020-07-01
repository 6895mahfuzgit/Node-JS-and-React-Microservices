const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = new express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(4002, () => {
  console.log("Query listen in port 4002");
});
