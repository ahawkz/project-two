const express = require('express');
const neighborhood = express.Router();

// ========== ROUTES ========== //

neighborhood.get('/neighborhoods', (req, res)=>{
	res.render('/neighborhood/index.ejs');
});


// ========== EXPORT ========== //
module.exports = neighborhood;
