var router = require('express').Router();
var Dog = require('../models/dog');
var animals = require('../models/methods');

// Get all dogs at /api/animals/dogs
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Dog'));
});

// Add a new dog at /api/animals/dogs
router.post('/', function (req, res, next) {
	var id = animals.listBySpecies('Dog').length;
	var name = req.body.name;
	var breed = req.body.breed;
	var color = req.body.color;


	var newDog = new Dog(id, name, breed, color);
	res.status(201).json(animals.add(newDog));
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

// Find dog by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific dog to bark
router.get('/:id/bark', function (req, res, next) {
	res.json({
		output: req.animal[0].bark()
	});
});

// Order dog to say its breed
router.get('/:id/sayBreed', function (req, res, next) {
	res.json({
		output: req.animal[0].sayBreed()
	});
});

// Order a specific dog to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	var color = req.body.color;
	req.animal[0].giveBirth(color);

	res.status(202).json(req.animal);
});

// Order dog to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});


module.exports = router;

