var Animal = require('./animal');

function Turtle(id, name, color) {
	this.id = id;
	Animal.call(this, name, 'Reptile', color);
	this.species = this.constructor.name;
	this.speed = 'very slooow';
}

Turtle.prototype = Object.create(Animal.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.eat = function () {
	return 'I am eating grass';
};

Turtle.prototype.getSpeed = function () {
	return 'I am ' + this.speed;
};

module.exports = Turtle;