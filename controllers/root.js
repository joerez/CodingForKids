const express = require('express');
const app = express();
const User = require('../models/user');
const Report = require('../models/report');
module.exports = (app) => {


//root
app.get('/', (req, res) => {

  let currentUser;
  if (req.user) {
    User.findById(req.user._id, (err, user) => {
      res.render('dashboard', {currentUser: user});
    })
  } else {
  res.render('root');
  }
})




//USER DASHBOARD
app.get('/dashboard', (req, res) => {
  //let currentUser = req.user

  let currentUser;
  if (req.user) {
    User.findById(req.user._id, (err, user) => {
      res.render('dashboard', {currentUser: user});
    })
  } else {
    res.render('root-index');
  }

})




//PROFILE BUILDER
app.get('/firstvisit', (req, res) => {
  let currentUser = req.user


  res.render('newuser', {currentUser, layout: false});
})


//NO SESSION YET
app.get('/session-null', (req, res) => {
  let currentUser;
  if (req.user) {
    User.findById(req.user._id, (err, user) => {
      res.render('session-null', {currentUser: user});
    })
  } else {
    res.render('root-index');
  }

})

//GET SESSION TOOLS INSTALLED
app.get('/session-tools', (req, res) => {
  let currentUser;
  if (req.user) {
    User.findById(req.user._id, (err, user) => {
      res.render('session-tools', {currentUser: user});
    })
  } else {
    res.render('root-index');
  }

})

//POST SESSION TOOLS INSTALLED
app.post('/installed', (req, res) => {

  let user = req.user;
  let userToken = req.user;

  // Find user userToken._id
  User.findById(userToken._id).then((user) => {

    //const newUser = { ...user, ...form }

    user.sessionFirst = false;

    // user.save
    return user.save()
  }).then((user) => {
    res.redirect('/dashboard');
  }).catch((err) => {
    //set route for this catch.
    console.log(err);
  })



})


//USER GITHUB ADDER
app.get('/github', (req, res) => {
  let currentUser;
  if (req.user) {
    User.findById(req.user._id, (err, user) => {
      res.render('github', {currentUser: user});
    })
  } else {
    res.render('root-index');
  }

})








} //Modules.exports
