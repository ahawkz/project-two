const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
  name: { type: String, required: true},
  rating: {type: Number, min: 0},
  cuisine: {type: String},
  comments: [{ type: String, date: Date }],
  date: {type: Date, default: Date.now},
  wishList: {type: Boolean},
  neighborhood: String,
  img: String
})

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = Restaurants;
