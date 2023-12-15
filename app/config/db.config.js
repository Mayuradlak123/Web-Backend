// db.js
const mongoose = require('mongoose');
const dotenv=require("dotenv").config()
const uri = process.env.DATABASE_URL // replace with your actual MongoDB Atlas connection string

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the MongoDB Atlas database');
    return mongoose.connection; // return the Mongoose connection
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
    throw error;
  }
}

module.exports = connectToDatabase;
