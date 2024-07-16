const mongoose = require('mongoose');

const adminInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  u_id: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  contact_no: {
    type: String,
    required: true
  }
});

const AdminInfo = mongoose.model('AdminInfo', adminInfoSchema, 'admin_info');

module.exports = AdminInfo;
