

const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');


module.exports = (app) => {

  // SIGN UP FORM

  app.get('/sign-up',  (req, res) => {

    res.render('root-index.handlebars');
  });

  // SIGN UP POST
  app.post('/sign-up/', (req, res) => {
    // Create User and JWT
    const user = new User(req.body);

    //console.log(req.body);




    recaptcha.verify(req, function(error, data){

      User.findOne({ username : req.body.username }, 'username password').then((user) => {

        if (user) {
          // User found

          return res.status(401).send({ message: 'Username Taken' });
        }
      })


          if(!error) {
              //success code


              user.save().then((user) => {
              var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
              res.cookie('nToken', token, { maxAge: 9000000, httpOnly: true });
              res.redirect('/');

              }).catch((err) => {
                console.log(err.message);
                return res.status(400).send({ err: err });
              });

            }
          else {
              //error code
              res.redirect('/robot');
          }
      });



  });


  // LOGOUT
  app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
  });

  // LOGIN FORM
  app.get('/login', (req, res) => {
    var currentUser = req.user;

    res.render('login.handlebars', { currentUser });
  });

  // LOGIN
  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, 'username password').then((user) => {

      if (!user) {
        // User not found

        return res.status(401).send({ message: 'Wrong Username or Password *' });
      }
      // Check the password
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          return res.status(401).send({ message: "Wrong Username or password ?"});
        }
        // Create a token

        // const obj = {...user}

        const token = jwt.sign(
          { _id: user._id,
            username: user.username,
            teacher: user.teacher,
            web: user.web,
            mobile: user.mobile,
            firstTime: user.firstTime,
            beginner: user.beginner,
            intermediate: user.intermediate,
            advanced: user.advanced,
            teacheracc: user.teacheracc,
            //leadership: user.leadership,
            group: user.group,
            students: user.students,
            age: user.age,
            school: user.school,
            email: user.email,
            image: user.image,
            firstname: user.firstname,
            lastname: user.lastname,
            location: user.location,
            phone: user.phone,
            posts: user.posts
          }, process.env.SECRET);
        //  { expiresIn: "60 days" }

        // Set a cookie and redirect to dashboard
        res.cookie('nToken', token, { maxAge: 9000000, httpOnly: true });
        res.redirect('/dashboard');
      });
    }).catch((err) => {
      console.log(err);
    });
  });

//BUILD PROFILE
app.post('buildprofile', (req, res) => {

  let currentUser = req.user;

  let profile = currentUser(req.body);

  profile.firstTime = false;
  

})



} //module.exports
