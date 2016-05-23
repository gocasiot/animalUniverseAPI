var Animal = require('./animal');

function Dog(id, name, breed, color) {
	this.id = id;
	Animal.call(this, name, 'Mammal', color);
	this.species = this.constructor.name;
	this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
	return 'Woof woof!';
};

Dog.prototype.sayBreed = function () {
	return 'I am a ' + this.breed;
};

module.exports = Dog;