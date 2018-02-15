const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Comment = mongoose.model('Comment', {
//  title: { type: String, maxlength: 100 },
//  content: { type: String, maxlength: 1000 },
  title: String,
  content: String,
  reportId: { type: Schema.Types.ObjectId, ref: 'Report' },
  user: {type : Schema.Types.ObjectId, ref: 'User', required: true},
  //idpost: [{type: Schema.Types.ObjectId, ref: 'Review'}]
  assignmentId: { type: Schema.Types.ObjectId, ref: 'Assignment' }
//  recaptcha: document.getElementById("g-recaptcha-response").value
});

module.exports = Comment;
