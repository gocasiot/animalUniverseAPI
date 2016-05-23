var router = require('express').Router();
var Turtle = require('../models/turtle');
var animals = require('../models/methods');


// Get all turtles at /api/animals/turtles
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Turtle'));
});

// Add a new turtle at /api/animals/turtles
router.post('/', function (req, res, next) {
	var id = animals.listAll().length;
	var name = req.body.name;
	var color = req.body.color;

	var newTurtle = new Turtle(id, name, color);
	res.status(201).json(animals.add(newTurtle));
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

// Find turtle by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific turtle to eat
router.get('/:id/eat', function (req, res, next) {
	res.json({
		output: req.animal[0].eat()
	});
});

// Get speed of a specific turtle
router.get('/:id/getSpeed', function (req, res, next) {
	res.json({
		output: req.animal[0].getSpeed()
	});
});

// Order a specific turtle to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	var color = req.body.color;
	req.animal[0].giveBirth(color);

	res.status(202).json(req.animal);
});

// Order a specific turtle to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});

module.exports = router;