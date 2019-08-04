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
neighborhood.get('/undertheradar/:id/new', (req, res) => {
   Neighborhood.findById(req.params.id, (err, neighborhood) => {
       res.render('neighborhood/new.ejs', {
         neighborhood: neighborhood
       });
   })
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
    Restaurant.find({}, (err, foundRestaurants) => {
      console.log(foundRestaurants);
      res.render('neighborhood/show.ejs', {
        neighborhood: foundNeighborhood,
        restaurant: foundRestaurants
      })
    })
  })
});

//create
neighborhood.post('/undertheradar/:id', (req, res) => {
  if(req.body.wishList === 'on'){
    req.body.wishList = true;
  } else {
    req.body.wishList = false;
  };
  Restaurant.create(req.body, (error, restaurant) => {
    res.redirect('/undertheradar/' + req.params.id);
  })
});


// ========== EXPORT ========== //
module.exports = neighborhood;
