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








} //modules.exports
