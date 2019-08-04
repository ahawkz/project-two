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

//new restaurant
neighborhood.get('/undertheradar/:id/new', (req, res) => {
   Neighborhood.findById(req.params.id, (err, neighborhood) => {
       res.render('neighborhood/new.ejs', {
         neighborhood: neighborhood
       });
   })
})

//show restaurant information (restaurant.ejs page)
neighborhood.get('/undertheradar/restaurant/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurantInfo) => {
    // Neighborhood.findById(req.params.neighborhoodId, (err, foundNeighborhood) => {
    //   console.log(req.params.neighborhoodId);
      res.render('neighborhood/restaurant.ejs', {
        restaurant: restaurantInfo,
      //   neighborhood: foundNeighborhood
      // })
    })
  })
});

// show individual neighborhoods (show.ejs page)
neighborhood.get('/undertheradar/:id', (req, res) => {
  Neighborhood.findById(req.params.id, (err, foundNeighborhood) => {
    Restaurant.find({}, (err, foundRestaurants) => {
      res.render('neighborhood/show.ejs', {
        neighborhood: foundNeighborhood,
        restaurant: foundRestaurants
      })
    })
  })
});

//create new restaurant
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

//update existing restaurant restaurant
 neighborhood.put('/undertheradar/restaurant/:id', (req, res) => {
   Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true}, () => {
     res.redirect('/undertheradar/restaurant/' + req.params.id)
   })
 })


//delete existing restaurant
neighborhood.delete('/undertheradar/restaurant/:id', (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id, (err, restaurant) => {
    res.redirect('/undertheradar/');
  })
})

//Edit existing restaurant
neighborhood.get('/undertheradar/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, foundRestaurant) => {
      res.render('neighborhood/edit.ejs', {
        restaurant: foundRestaurant
    })
  })
});



// ========== EXPORT ========== //
module.exports = neighborhood;
