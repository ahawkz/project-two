const express = require('express');
const neighborhood = express.Router();
const Neighborhood = require('../models/neighborhoods.js');
const manyNeighborhoods = require('../models/neighborhoodData.js');
const Restaurant = require('../models/restaurants.js');
const manyRestaurants = require('../models/restaurantsData.js');

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
    // console.log(Restaurant[0].category);
    Restaurant.find({}, (err, foundRestaurants) => {
      res.render('neighborhood/show.ejs', {
        neighborhood: foundNeighborhood,
        restaurant: foundRestaurants
      })
    })
  })
});

//show restaurants in that neighborhood
neighborhood.get('/undertheradar/:id', (req, res) => {
  Neighborhood.findById(req.params.id, (err, foundNeighborhood) => {
    res.render('neighborhood/show.ejs', {
      neighborhood: foundNeighborhood
    })
  })
});

// ========== EXPORT ========== //
module.exports = neighborhood;
