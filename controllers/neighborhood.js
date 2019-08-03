const express = require('express');
const neighborhood = express.Router();

neighborhood.get('/', (req, res)=>{
	res.render('neighborhood/index.ejs');
});

module.exports = neighborhood;
