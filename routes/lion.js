var router = require('express').Router();
var Lion = require('../models/lion');
var animals = require('../models/methods');

// Get all lions at /api/animals/lions
router.get('/', function (req, res, next) {
	res.json(animals.listBySpecies('Lion'));
});

// Add a new lion at /api/animals/lions
router.post('/', function (req, res, next) {
	var id = animals.listAll().length;
	var name = req.body.name;

	var newLion = new Lion(id, name);
	res.status(201).json(animals.add(newLion));
});

// Middleware for obtaining id
router.param('id', function (req, res, next, id) {
	var animalById = animals.findByIdWithinSpecies(+id, 'Lion');

	if(animalById.length === 0) {
		var err = new Error('not found');
  		err.status = 404;
  		next(err);
	} else {
		req.animal = animalById;
		next();
	}
});

// Find lion by Id
router.get('/:id', function (req, res, next) {
	res.json(req.animal);
});

// Order a specific lion to make noise
router.get('/:id/makeNoise', function (req, res, next) {
	res.json({
		output: req.animal[0].makeNoise()
	});
});

// Get speed of a specific lion
router.get('/:id/getSpeed', function (req, res, next) {
	res.json({
		output: req.animal[0].getSpeed()
	});
});

// Order a specific lion to give birth
router.put('/:id/giveBirth', function (req, res, next) {
	// Assume all lions are gold
	req.animal[0].giveBirth('Gold');

	res.status(202).json(req.animal);
});

// Order a specific lion to say its name
router.get('/:id/sayName', function (req, res, next) {
	res.json({
		output: req.animal[0].sayName()
	});
});


module.exports = router;