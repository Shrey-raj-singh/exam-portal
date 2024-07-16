const mongoose = require('mongoose');

const studentInfoSchema = new mongoose.Schema({
  school_id: {
    type: String,
    required: true
  },
  student_name: {
    type: String,
    required: true
  },
  class:{
    type: String,
    required: true
  },
  fathers_name: {
    type: String,
    required: true
  },
  dob: {
    type: Date, 
    required: true
  },
  contact_no: {
    type: String,
    required: true
  },
  student_id: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  }
});

const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema, 'student_info');

module.exports = StudentInfo;
