const User = require('../models/user');
const Report = require('../models/report');
const Assignment = require('../models/assignment');
const Comment = require('../models/comment');

var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {

  // CREATE REPORT
  app.post('/reports/:id/post', (req, res) => {


    let newReport = new Report(req.body);
    newReport.username = req.user.username;
    newReport.ip = req.connection.remoteAddress;
    newReport.student = req.params.id;




    // ??? Maybe a () => {} function here.
    recaptcha.verify(req, function(error, data){
         if(!error)
             //success code
             {
               newReport.save((err,report) => {
                 // ??? Fetch this user
                 // then add to review to reviews array
                 // then save
                 if(err) throw err;
                 res.redirect('back');
               })
             }
         else
             //error code
             {
               res.redirect('/robot');
             }
     });

  })



  // SHOW REPORT PAGE
  app.get('/reports/:id', (req, res) => {

    const findPerson = req.params.id;


    let currentUser;
    if (req.user) {
        User.findById(req.user._id, (err, user) => {
      Report.find({student : req.params.id}).then((reports) => {
        res.render('reports-show', {findPerson, reports: reports, currentUser: user});
       })
     })
     } else {
       res.redirect('back')
     }
 })


 // SHOW ASSIGNMENTS PAGE
 app.get('/assignments/:id', (req, res) => {

    const findPerson = req.params.id;

   User.findById(req.user._id, (err, user) => {
     Assignment.find({student : req.params.id}).then((assignments) => {
       res.render('assignments', {findPerson, assignments: assignments, currentUser: user});
     })

   })

})


// CREATE ASSIGNMENT
app.post('/assignments/:id/post', (req, res) => {


  let newAssignment = new Assignment(req.body);
  newAssignment.username = req.user.username;
  newAssignment.ip = req.connection.remoteAddress;
  newAssignment.student = req.params.id;


  // ??? Maybe a () => {} function here.
  recaptcha.verify(req, function(error, data){
       if(!error)
           //success code
           {
             newAssignment.save((err,report) => {
               // ??? Fetch this user
               // then add to review to reviews array
               // then save
               if(err) throw err;
               res.redirect('back');
             })
           }
       else
           //error code
           {
             res.redirect('/robot');
           }
   });

})

// DELETE REPORT
app.delete('/reports/:id', function (req, res) {
  console.log("DELETE report")
  Report.findByIdAndRemove(req.params.id).then((report) => {
    res.redirect('back');
  }).catch((err) => {
    // ???
    console.log(err.message);
  })
})

// DELETE ASSIGNMENT
app.delete('/assignments/:id', function (req, res) {
  console.log("DELETE assignment")
  Assignment.findByIdAndRemove(req.params.id).then((assignment) => {
    res.redirect('back');
  }).catch((err) => {
    // ???
    console.log(err.message);
  })
})



} //modules.exports
