var Animal = require('./animal');

function Cat(id, name, breed, color) {
	this.id = id;
	Animal.call(this, name, 'Mammal', color);
	this.species = this.constructor.name;
	this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeNoise = function () {
	return 'Meoww';
};

Cat.prototype.sayBreed = function () {
	return 'My breed is ' + this.breed;
};

module.exports = Cat;