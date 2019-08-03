const express = require('express');
const restaurants = express.Router();

router.get('/', (req, res)=>{
	res.render('neighborhood/index.ejs');
});

module.exports = router;
