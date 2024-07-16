// const mongoose = require('mongoose');

// const schoolDetailSchema = new mongoose.Schema({
//   school_id: {
//     type: String,
//     required: true,
//     unique: true 
//   },
//   school_name: {
//     type: String,
//     required: true
//   },
//   spoc_name: {
//     type: String,
//     required: true
//   },
//   spoc_id: {
//     type: String,
//     required: true,
//     unique: true 
//   },
//   spoc_password: {
//     type: String,
//     required: true
//   },
//   spoc_contact: {
//     type: String,
//     required: true
//   }
// });

// const SchoolDetail = mongoose.model('SchoolDetail', schoolDetailSchema, 'school_details');

// module.exports = SchoolDetail;

const mongoose = require('mongoose');

const schoolDetailSchema = new mongoose.Schema({
  school_id: {
    type: String,
    required: true,
    unique: true 
  },
  name: {
    type: String,
    required: true
  },
  address: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pin_code: {
      type: String,
      required: true
    }
  },
  spoc_name: {
    type: String,
    required: true
  },
  spoc_id: {
    type: String,
    required: true,
    unique: true 
  },
  spoc_password: {
    type: String,
    required: true
  },
  spoc_contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true 
});

const SchoolDetail = mongoose.model('SchoolDetail', schoolDetailSchema, 'school_details');

module.exports = SchoolDetail;
