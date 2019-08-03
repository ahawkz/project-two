const express = require('express');
const neighborhood = express.Router();
const Neighborhood = require('../models/neighborhoods.js');
const manyNeighborhoods = require('../models/neighborhoodData.js');

// ========== ROUTES ========== //
neighborhood.get('/' , (req, res) => {
  res.render('index.ejs')
});

//get db of neighborhoods
neighborhood.get('/neighborhoods', (req, res) => {
  Neighborhood.find({}, (error, allNeighborhoods) => {
    res.render('neighborhood/index.ejs',
      {
        neighborhoods: allNeighborhoods
      })
  })
});

// ========== EXPORT ========== //
module.exports = neighborhood;
