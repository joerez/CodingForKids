const express = require('express');
const app = express();


module.exports = (app) => {


//root
app.get('/', (req, res) => {
  res.render('root-index');
})

}
