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

//new
neighborhood.get('/undertheradar/new', (req, res) => {
  res.render('neighborhood/new.ejs');
})

//show restaurant information
neighborhood.get('/undertheradar/restaurant/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurantInfo) => {
    res.render('neighborhood/restaurant.ejs', {
      restaurant: restaurantInfo
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



// ========== EXPORT ========== //
module.exports = neighborhood;
