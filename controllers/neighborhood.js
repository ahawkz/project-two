const express = require('express');
const neighborhood = express.Router();
const Neighborhood = require('../models/neighborhoods.js');


// ========== ROUTES ========== //
neighborhood.get('/' , (req, res) => {
  res.render('index.ejs')
});

neighborhood.get('/neighborhoods', (req, res) => {
  res.render('neighborhood/index.ejs')
})

// ========== EXPORT ========== //
module.exports = neighborhood;
