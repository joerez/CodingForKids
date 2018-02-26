const Report = require('../models/report');
const Comment = require('../models/comment');
//const Auth = require('./controllers/auth.js')(app);
const User = require('../models/user');


var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {

  //NEW Comment
 app.post('/reports/comment', (req, res) => {

   const commentData = {...req.body, username: req.user.username}
    Comment.create(commentData).then((comment) => {
      res.redirect('back')
    }).catch((err) => {
      console.log(err.message);
    })

 })


 //DELETE COMMENT
 app.delete('/reports/comment/:id', function (req, res) {
   console.log("delete comment")
   Comment.findByIdAndRemove(req.params.id).then((comment) => {
     res.redirect('/reports/' + comment.reviewId);
   }).catch((err) => {
     console.log(err.message);
   })
 })



}
