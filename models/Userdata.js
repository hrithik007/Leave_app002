const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({


  Leave_Type: {
    type: String,
    required: true
  },
  Leave_From: {
    type: Date,
    
  },
    Leave_To: {
    type: Date,
  }
});

const Userdata = mongoose.model('Userdata', UserSchema);

module.exports = Userdata;