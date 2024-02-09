// mongooseConnection.js

const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb+srv://Mayur:Mayur@cluster0.pofppjq.mongodb.net/Students?retryWrites=true&w=majority'; // replace 'your_mongodb_connection_uri' with your actual MongoDB connection URI

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose.connection;
