const express = require('express');
const { addStudentController, getAllStudentsController } = require('../controller/student.controller.js');
const router=express.Router();
router.post("/register-student",addStudentController )
router.post("/students",getAllStudentsController )
module.exports = router