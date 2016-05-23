var router = require('express').Router();
var Cat = require('../models/cat');
var animals = require('../models/methods');


// Get all cats at /api/animals/cats
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Cat'));
});

// Add a new cat at /api/animals/cats
router.post('/', function (req, res, next) {
	var id = animals.listAll().length;
	var name = req.body.name;
	var breed = req.body.breed;
	var color = req.body.color;

	var newCat = new Cat(id, name, breed, color);
	res.status(201).json(animals.add(newCat));
});

// Middleware for obtaining id
router.param('id', function (req, res, next, id) {
	var animalById = animals.findByIdWithinSpecies(+id, 'Cat');

	if(animalById.length === 0) {
		var err = new Error('not found');
  		err.status = 404;
  		next(err);
	} else {
		req.animal = animalById;
		next();
	}
});

// Find cat by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific cat to make noise
router.get('/:id/makeNoise', function (req, res, next) {
	res.json({
		output: req.animal[0].makeNoise()
	});
});

// Order a specific cat to say its breed
router.get('/:id/sayBreed', function (req, res, next) {
	res.json({
		output: req.animal[0].sayBreed()
	});
});

// Order a specific cat to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	var color = req.body.color;
	req.animal[0].giveBirth(color);

	res.status(202).json(req.animal);
});

// Order a specific cat to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});

module.exports = router;