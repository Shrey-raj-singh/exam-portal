const mongoose = require('mongoose');

const mongodb = process.env.mongodb;

const mongodb_connect = mongoose.connect(mongodb );

  module.exports=mongodb_connect;