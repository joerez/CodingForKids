const User = require('../models/user');  //in place of review
const Report = require('../models/report'); //in place of comment



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

    User.findById(req.user._id, (err, user) => {

      const findPerson = User.findById(req.params.id)
      const findReports = Report.find({ reportId: Object(req.params.id) }).populate('user')

      Promise.all([findPerson, findReports]).then((values) => {
        console.log(values)
        res.render('reports-show', { user: values[0], reports: values[1], currentUser: user, id: req.params.id })
      }).catch((err) => {
        // ??? Maybe a status code ...
        // handleErrors(err, res)
        console.log(err.message)
      })
    })

  })



}
