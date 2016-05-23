var Animal = require('./animal');

function Parrot(id, name, color) {
	this.id = id;
	Animal.call(this, name, 'Bird', color);
	this.species = this.constructor.name;
}

Parrot.prototype = Object.create(Animal.prototype);
Parrot.prototype.constructor = Parrot;

Parrot.prototype.talk = function () {
	return 'Helloo!';
};

Parrot.prototype.fly = function () {
	return 'I am flying!';
};

module.exports = Parrot;