const express = require('express');
const app = express();
const User = require('../models/user');

module.exports = (app) => {


//root
app.get('/', (req, res) => {
  let currentUser = req.user

  if (currentUser) {
    res.render('dashboard', {currentUser});
  } else {
  res.render('root-index', {currentUser});
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
    res.render('/');
  }

})





app.get('/firstvisit', (req, res) => {
  let currentUser = req.user


  res.render('newuser', {currentUser, layout: false});
})


}
