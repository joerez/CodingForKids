const mongoose = require('mongoose');
const Schema = mongoose.Schema


const postSchema = mongoose.Schema({
//  title: { type: String, maxlength: 140 },
//  description: { type: String, maxlength: 140 },
//  player: { type: String, maxlength: 16 },
  title: String,
  description: String,
  imageurl: String,
  ip: String,
  username : String,
  location : String
//  recaptcha: document.getElementById("g-recaptcha-response").value
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
