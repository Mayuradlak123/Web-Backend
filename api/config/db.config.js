// db.js
const mongoose = require('mongoose');
const dotenv=require("dotenv").config()
const DATABSE_URL="mongodb+srv://Mayur:Mayur@cluster0.pofppjq.mongodb.net/?retryWrites=true&w=majority"

async function connectToDatabase() {
 
  try {

    await mongoose.connect(DATABSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the MongoDB Atlas database');
    return mongoose.connection; // return the Mongoose connection
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
    throw error;
  }
}

module.exports = connectToDatabase;
