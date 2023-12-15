// index.js
const db=require("./app/config/db.config")
const express = require('express');
const bodyParser = require('body-parser');
const serviceRoutes = require("./app/routes/contacts.routes")

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/services", serviceRoutes);

app.get("/", function(req, res) {
  res.json({message:"App Launched successfully"})
})
app.listen(port, () => {
  db()
  console.log(`Server is running on port ${port}`);
});
