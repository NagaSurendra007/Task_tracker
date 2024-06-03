const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task:{
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  priority:{
    type: String,
    required: true,

  },
  date:{
    type: Date,
    required :false
  }

},{timestamps: true})

module.exports = mongoose.model('TAsk',TaskSchema)
