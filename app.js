// index.js
const db=require("./api/config/database.js")
const express = require('express');
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser');
const studentRoutes = require("./api/routes/student.routes.js")
const cors= require("cors")
const app = express();
const port = process.env.PORT||8000;

app.use(bodyParser.json());
app.use("/api/v1", studentRoutes);

app.get("/", function(req, res) {
  res.json({message:"App Launched successfully Version 06"})
})
app.use(cors({origin:"http://127.0.0.1:57291"}));

app.listen(port);
module.exports= app;
// https://opulix-gufyfk9q1-mayuradlak123.vercel.app/
// https://newsapplication-backend.onrender.com/
// resourcesSaver