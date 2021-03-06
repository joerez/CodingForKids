const mongoose = require('mongoose');
const Schema = mongoose.Schema


const helpSchema = mongoose.Schema({
//  title: { type: String, maxlength: 140 },
//  description: { type: String, maxlength: 140 },
//  player: { type: String, maxlength: 16 },
  title: String,
  content: String,
  imageurl: String,
  ip: String,
  teacher : String,
  student : String,
  username : String,
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  date : String,
  comments : [{}]
//  recaptcha: document.getElementById("g-recaptcha-response").value
});

const Help = mongoose.model('Help', helpSchema);

module.exports = Help;
