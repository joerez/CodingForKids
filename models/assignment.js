const mongoose = require('mongoose');
const Schema = mongoose.Schema


const assignmentSchema = mongoose.Schema({
//  title: { type: String, maxlength: 140 },
//  description: { type: String, maxlength: 140 },
//  player: { type: String, maxlength: 16 },
  title: String,
  content: String,
  imageurl: String,
  ip: String,
  teacher : String,
  student : String,
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  date : String
//  recaptcha: document.getElementById("g-recaptcha-response").value
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
