// We store all the animals in an array
var animals = [];

module.exports = {
	// List all animals
	listAll: function () {
		return animals;
	},
	// Add a new animal to the list
	add: function (animal) {
		animals.push(animal);
		return animal;
	},
	// List animals by species
	listBySpecies: function (species) {
		return animals.filter(function (animal) {
			return animal.species === species;
		});
	},
	// List animals by Id
	findById: function (id) {
		return animals.filter(function (animal) {
			return animal.id === id;
		});
	}
};