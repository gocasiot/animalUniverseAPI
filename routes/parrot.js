var router = require('express').Router();
var Parrot = require('../models/parrot');
var animals = require('../models/methods');

// Get all parrots at /api/animals/parrots
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Parrot'));
});

// Add a new parrot at /api/animals/parrots
router.post('/', function (req, res, next) {
	var id = animals.listAll().length;
	var name = req.body.name;
	var color = req.body.color;

	var newParrot = new Parrot(id, name, color);
	res.status(201).json(animals.add(newParrot));
});

// Middleware for obtaining id
router.param('id', function (req, res, next, id) {
	var animalById = animals.findById(+id);

	if(animalById.length === 0) {
		var err = new Error('not found');
  		err.status = 404;
  		next(err);
	} else {
		req.animal = animalById;
		next();
	}
});

// Find parrot by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific parrot to talk
router.get('/:id/talk', function (req, res, next) {
	res.json({
		output: req.animal[0].talk()
	});
});

// Order a specific parrot to fly
router.get('/:id/fly', function (req, res, next) {
	res.json({
		output: req.animal[0].fly()
	});
});

// Order a specific parrot to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	var color = req.body.color;
	req.animal[0].giveBirth(color);

	res.status(202).json(req.animal);
});

// Order a specific parrot to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});

module.exports = router;