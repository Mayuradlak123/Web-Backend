// index.js
const db=require("./api/config/db.config")
const express = require('express');
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser');
const serviceRoutes = require("./api/routes/contacts.routes")

const app = express();
const port = process.env.PORT||8000;

app.use(bodyParser.json());
app.use("/services", serviceRoutes);

app.get("/", function(req, res) {
  res.json({message:"App Launched successfully"})
})
db()
app.listen(port);
// module.exports= app;
