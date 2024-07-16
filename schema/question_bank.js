const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true,
  },
  topic: {
    type: String,
    required: true
  },
  difficulty_level: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'] 
  }
});

const QuestionBank = mongoose.model('QuestionBank', questionBankSchema, 'question_bank');

module.exports = QuestionBank;
