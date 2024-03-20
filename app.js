// index.js
const db=require("./api/config/database.js")
const express = require('express');
const dotenv=require("dotenv").config()

const studentRoutes = require("./api/routes/student.routes.js")

const youtubeRoutes = require("./api/routes/youtube.routes.js")
const cors= require("cors")

const app = express();
const port = process.env.PORT||8000;


app.use("/api/v1", studentRoutes);
app.use("/api/v1", youtubeRoutes);

app.get("/", function(req, res) {
  res.json({message:"App Launched successfully Version 08"})
})
app.use(express.json())


app.listen(port,()=>{
  console.log({message:"EC2 Server Setup Successfully "+port,status:true});
});
module.exports= app;
// https://opulix-gufyfk9q1-mayuradlak123.vercel.app/
// https://newsapplication-backend.onrender.com/
// resourcesSaver
