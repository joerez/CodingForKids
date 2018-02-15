const Assignment = require('../models/assignment');
const Comment = require('../models/comment');

//const Auth = require('./controllers/auth.js')(app);
const User = require('../models/user');


var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {

  //NEW Comment
 app.post('/assignments/comment', (req, res) => {



   recaptcha.verify(req, function(error, data){
         if(!error)
             //success code
             {
               const commentData = {...req.body, user: req.user}
                Comment.create(commentData).then((comment) => {
                  res.redirect('/assignments/' + comment.assignmentId)
                }).catch((err) => {
                  console.log(err.message);
                })


             }
         else
             //error code
             {
               res.redirect('/robot');
             }
     });



 })


 //DELETE COMMENT
 app.delete('/assignments/comment/:id', function (req, res) {
   console.log("delete comment")
   Comment.findByIdAndRemove(req.params.id).then((comment) => {
     res.redirect('/assignments/' + comment.assignmentId);
   }).catch((err) => {
     console.log(err.message);
   })
 })



}
