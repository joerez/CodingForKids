const User = require('../models/user');  //in place of review
const Report = require('../models/report'); //in place of comment



var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {




  // VIEW STUDENTS
  app.get('/teacherview', (req, res) => {

    User.find({teacheracc : false}).then((users) => {
      let currentUser;

      if (req.user) {
        User.findById(req.user._id, (err, user) => {
          res.render('teacher-view', {users, currentUser: user});
        })
      } else {
      res.render('back', { currentUser: currentUser});
    }
    }).catch((err) => {
      // ??? Maybe a status code...
      console.log(err);
    })

 })


 //ModArea
 app.get('/admin', (req, res) => {

   User.findById(req.user._id, (err, user) => {
       res.render('admin', {currentUser: user});
     })


 })




 //UPDATE NEXT SESSION
 app.post('/admin/session', (req, res) => {
   User.findOne({username: req.body.nextSessionName}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.nextSession = req.body.nextSessionContent;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })



 //UPDATE STUDENTS HANGOUT SESSION URL
 app.post('/admin/hangout', (req, res) => {
   User.findOne({username: req.body.hangoutName}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.session = req.body.hangoutContent;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })


 //UPDATE STUDENTS HANGOUT SESSION URL
 app.post('/admin/teacher', (req, res) => {
   User.findOne({username: req.body.teacherName}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.teacheracc = true;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })








} //modules.exports
