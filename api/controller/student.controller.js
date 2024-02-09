// studentController.js

const Student = require('../model/student.model.js'); // Assuming your student model is defined in studentModel.js

 const addStudentController = async (req, res) => {
    try {
        const { address,            education, name, email, phone, city, gender, pincode, course } = req.body;
        
        // Create a new student object
        const newStudent = new Student({
            name,
            email,
            phone,
            city,
            gender,
            pincode,
            address,
            education,
            course
        });

        // Save the student to the database
        const savedStudent = await newStudent.save();

        res.status(200).json(savedStudent); // Return the saved student
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ error: 'Error adding student' });
    }
};

// Controller function to get all students
 const getAllStudentsController = async (req, res) => {
    try {
        // Find all students from the database
        const allStudents = await Student.find();

        res.json(allStudents); // Return all students
    } catch (error) {
        console.error('Error getting all students:', error);
        res.status(500).json({ error: 'Error getting all students' });
    }
};

module.exports ={getAllStudentsController,addStudentController};
