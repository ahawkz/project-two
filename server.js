//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Neighborhood = require('./models/neighborhoods.js');
const Restaurant = require('./models/restaurants.js');
const manyNeighborhoods = require('./models/neighborhoodData.js');
const manyRestaurants = require('./models/restaurantsData.js');
//controllers
const neighborhoodController = require('./controllers/neighborhood.js');


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
//neighborhood controlloer
app.use('/', neighborhoodController);

//___________________
// Data
//___________________
app.get('/neighborhoods/seed', async (req, res) => {
  try {
   const seedItems = await Neighborhood.create(manyNeighborhoods)
    res.redirect('/undertheradar');
  } catch (err) {
    res.send(err.message)
  }
});

app.get('/restaurants/seed', async (req, res) => {
  try {
   const seedItems = await Restaurant.create(manyRestaurants)
    res.redirect('/undertheradar');
  } catch (err) {
    res.send(err.message)
  }
});
//___________________
// Routes
//___________________
//localhost:3000
// app.get('/' , (req, res) => {
//   res.render('index.ejs')
// });

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
