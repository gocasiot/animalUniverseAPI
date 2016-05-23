var Animal = require('./animal');

function Lion(id, name){
	this.id = id;
	Animal.call(this, name, 'Mammal', 'Gold');
	this.species = this.constructor.name;
	this.speed = 'very fast';
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Lion;

Lion.prototype.makeNoise = function () {
	return 'Rooooaaaarrr!'
};

Lion.prototype.getSpeed = function () {
	return 'I am ' + this.speed;
};

module.exports = Lion;