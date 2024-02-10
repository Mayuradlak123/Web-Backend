// studentModel.js

const mongoose = require('mongoose');
const { getCurrentDateTime } = require('../utils/util.js');

// Define the schema for the student
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        default:""
    },
    email: {
        type: String,
        default:"",
        unique: true
    },
    phone: {
        type: String,
        default:""
    },
    city: {
        type: String,
        default:""
    },
    gender: {
        type: String,
       
        default:""
    },
    education:{
        type: String,
        default:""
    },
    address: {
        type: String,
        default:"" 
    }
    ,
    pincode: {
        type: String,
        default:""
    },
    course: {
        type: String,
        default:""
    },
    createdOn: {
        type: String,
        default:`${getCurrentDateTime()}`
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;