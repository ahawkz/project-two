const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
  name: { type: String, required: true}
})

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = Neighborhood;
