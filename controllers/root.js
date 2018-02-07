const express = require('express');
const app = express();


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


app.get('/dashboard', (req, res) => {
  // let currentUser = req.user


  User.findById(req.user._id, (err, user) => {
    res.render('dashboard', {currentUser : user});

  })



 //  if (currentUser.firstTime) {
 //    res.render('newuser', {currentUser, layout: false});
 //  } else {
 //  res.render('dashboard', {currentUser});
 // }
})

app.get('/firstvisit', (req, res) => {
  let currentUser = req.user


  res.render('newuser', {currentUser, layout: false});
})


}
