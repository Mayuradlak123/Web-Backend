// index.js
const db=require("./api/config/db.config")
const express = require('express');
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser');
const serviceRoutes = require("./api/routes/contacts.routes")
const cors= require("cors")
const app = express();
const port = process.env.PORT||8000;

app.use(bodyParser.json());
app.use("/services", serviceRoutes);

app.get("/", function(req, res) {
  res.json({message:"App Launched successfully"})
})
var whitelist = ['http://localhost:5173',"http://127.0.0.1:5173", "http://localhost:3306","https://opulix-gufyfk9q1-mayuradlak123.vercel.app"]
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (whitelist.indexOf(origin) === -1) {
                const msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);
db()
app.listen(port);
module.exports= app;
// https://opulix-gufyfk9q1-mayuradlak123.vercel.app/
// https://newsapplication-backend.onrender.com/
// resourcesSaver