const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  password:{
    type: Number,
    required: true,

  }

},{timestamps: true})

module.exports = mongoose.model('Login',LoginSchema)
