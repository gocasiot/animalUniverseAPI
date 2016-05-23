var router = require('express').Router();
var Animal = require('../models/animal');
var animals = require('../models/methods');

// List all animals by going to /api/animals
router.get('/', function (req, res, next) {
	res.json(animals.listAll());
});

// We mount the different routes on /api/animals/
router.use('/cats', require('./cat'));
router.use('/dogs', require('./dog'));
router.use('/lions', require('./lion'));
router.use('/parrots', require('./parrot'));
router.use('/sharks', require('./shark'));
router.use('/turtles', require('./turtle'));
module.exports = router;