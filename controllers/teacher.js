const User = require('../models/user');  //in place of review
const Report = require('../models/report'); //in place of comment



var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {




  // VIEW STUDENTS
  app.get('/teacherview', (req, res) => {

    User.find({teacheracc : false}).then((users) => {
      User.find({teacher : req.user.username}).then((users) => {
      let currentUser;

      if (req.user) {
        User.findById(req.user._id, (err, user) => {

          res.render('teacher-view', {users, currentUser: user});
        })
      } else {
      res.render('back', { currentUser: currentUser});
    }
    }).catch((err) => {
      console.log(err);
    })
})

 })


 //ModArea
 app.get('/admin', (req, res) => {

   User.findById(req.user._id, (err, user) => {

     User.find({teacheracc : false}, (err, users) => {
       res.render('admin', {currentUser: user, users});
     })

     })

 })

 // VIEW STUDENTS
 app.get('/users/:username', (req, res) => {

     User.find({ username: req.params.username}).then((users) => {
     let currentUser;

     if (req.user) {
       User.findById(req.user._id, (err, user) => {
         res.render('profile-page', {users, currentUser: user});
       })
     } else {
     res.render('back', { currentUser: currentUser});
   }
   }).catch((err) => {
     console.log(err);
   })

})


 //teachers lounge
 app.get('/admin/lounge', (req, res) => {

   User.findById(req.user._id, (err, user) => {
       res.render('teachers-lounge', {currentUser: user});
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


 //ADD NEW TEACHER
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


 //CHANGE STUDENTS TEACHER
 app.post('/admin/changeteacher', (req, res) => {
   User.findOne({username: req.body.changeTeacherUser}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.teacher = req.body.changeTeacherTeacher;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })



 //PROMPT FOR GITHUB
 app.post('/dashboard/github', (req, res) => {
   User.findOne({username: req.body.gitName}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.addGithub = true;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })


 //POST GITHUB USERNAME
 app.post('/github/post', (req, res) => {

   let user = req.user;
   let userToken = req.user;

   // Find user userToken._id
   User.findById(userToken._id).then((user) => {

     //const newUser = { ...user, ...form }

     user.github = req.body.github;
     user.addGithub = false;
     // user.save
     return user.save()
   }).then((user) => {
     res.redirect('/dashboard');
   }).catch((err) => {
     //set route for this catch.
     console.log(err);
   })
 })

 //PROMPT FOR FREECODECAMP
 app.post('/dashboard/freecodecamp', (req, res) => {
   User.findOne({username: req.body.fccuser}, (err, user) => {
     console.log(req.body);
     console.log(user);
     user.addFreeCodeCamp = true;
     user.save((err, user) => {
       console.log(user);

       res.redirect('/admin');
     })
   })
 })

 //POST FREECODECAMP USERNAME
 app.post('/codecamp/post', (req, res) => {

   let user = req.user;
   let userToken = req.user;

   // Find user userToken._id
   User.findById(userToken._id).then((user) => {

     //const newUser = { ...user, ...form }

     user.freecodecamp = req.body.freecodecamp;
     user.addFreeCodeCamp = false;
     // user.save
     return user.save()
   }).then((user) => {
     res.redirect('/dashboard');
   }).catch((err) => {
     //set route for this catch.
     console.log(err);
   })
 })




} //modules.exports
