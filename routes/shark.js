var router = require('express').Router();
var Shark = require('../models/shark');
var animals = require('../models/methods');

// Get all sharks at /api/animals/sharks
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Shark'));
});

// Add a new shark at /api/animals/sharks
router.post('/', function (req, res, next) {
	var id = animals.listAll().length;
	var name = req.body.name;
	var color = req.body.color;

	var newShark = new Shark(id, name, color);
	res.status(201).json(animals.add(newShark));
});

// Middleware for obtaining id
router.param('id', function (req, res, next, id) {
	var animalById = animals.findByIdWithinSpecies(+id, 'Shark');

	if(animalById.length === 0) {
		var err = new Error('not found');
  		err.status = 404;
  		next(err);
	} else {
		req.animal = animalById;
		next();
	}
});

// Find shark by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific shark to swim
router.get('/:id/swim', function (req, res, next) {
	res.json({
		output: req.animal[0].swim()
	});
});

// Tell a specific shark to say his/her favorite name
router.get('/:id/sayFavoriteName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayFavoriteName()
	});
});

// Order a specific shark to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	var color = req.body.color;
	req.animal[0].giveBirth(color);

	res.status(202).json(req.animal);
});

// Order a specific shark to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});

module.exports = router;