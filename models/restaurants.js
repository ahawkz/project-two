const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
  name: { type: String, required: true},
  rating: {type: Number},
  cuisine: {type: String},
  comments: [{ body: String, date: Date }],
  date: {type: Date, default: Date.now},
  wishList: {type: Boolean}
})

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = Restaurants;
