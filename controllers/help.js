const User = require('../models/user');
const Help = require('../models/help');

var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



module.exports = (app) => {




  // SHOW HELP AREA
  app.get('/help', (req, res) => {

    const findPerson = req.user.username;


    let currentUser;
    if (req.user) {
        User.findById(req.user._id, (err, user) => {
      Help.find({username : findPerson}).then((helps) => {
        res.render('help', {findPerson, helps, currentUser: user});
       })
     })
     } else {
       res.redirect('back')
     }
 })



  //POST A HELP PAGE
  app.post('/help/post', (req, res) => {


    let newHelp = new Help(req.body);
    newHelp.username = req.user.username;
    newHelp.ip = req.connection.remoteAddress;
    newHelp.student = req.params.id;


    recaptcha.verify(req, function(error, data){
         if(!error)
             //success code
             {
               newHelp.save((err,report) => {
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



  //SHOW HELP PAGE
  app.get('/help/:id', (req, res) => {

    const findPerson = req.params.id;


    let currentUser;
    if (req.user) {
        User.findById(req.user._id, (err, user) => {
      Help.find({student : req.params.id}).then((helps) => {
        res.render('helps-show', {findPerson, helps, currentUser: user});
       })
     })
     } else {
       res.redirect('back')
     }
 })


 //ADMIN HELP
 app.get('/admin/help', (req, res) => {

   User.find({teacheracc : false}).then((users) => {
     let currentUser;

     if (req.user) {
       Help.find({}, (err, helps) => {
         res.render('adminhelp', {helps, currentUser: currentUser});
       })
     } else {
     res.render('back', { currentUser: currentUser});
   }
   }).catch((err) => {
     // ??? Maybe a status code...
     console.log(err);
   })

})




} //modules.exports
