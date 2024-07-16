const mongoose = require('mongoose');

const questionPaperSchema = new mongoose.Schema({
  question_id: {
    type: [String],
    required: true
  },
  school_id: {
    type: String,
    required: true
  },
  test_name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  total_marks: {
    type: String,
    required: true,
  },
  class: { 
    type: String,
    required: true
  }
});

const QuestionPaper = mongoose.model('QuestionPaper', questionPaperSchema, 'question_paper');

module.exports = QuestionPaper;
