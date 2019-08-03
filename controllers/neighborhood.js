const express = require('express');
const neighborhood = express.Router();
const Neighborhood = require('../models/neighborhoods.js');
const manyNeighborhoods = require('../models/neighborhoodData.js');

// ========== ROUTES ========== //

//get db of neighborhoods on homepage
neighborhood.get('/undertheradar', (req, res) => {
  Neighborhood.find({}, (error, allNeighborhoods) => {
    res.render('neighborhood/index.ejs',
      {
        neighborhoods: allNeighborhoods
      })
  })
});

// show individual neighborhoods
neighborhood.get('/undertheradar/:id', (req, res) => {
  Neighborhood.findById(req.params.id, (err, foundNeighborhood) => {
    res.render('neighborhood/show.ejs', {
      neighborhood: foundNeighborhood
    })
  })
});

// ========== EXPORT ========== //
module.exports = neighborhood;
