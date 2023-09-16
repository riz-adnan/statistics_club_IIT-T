const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArchiveSchema = new Schema({
   
    title:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    link:{
        type:String,
        default: "..."
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Archive', ArchiveSchema);