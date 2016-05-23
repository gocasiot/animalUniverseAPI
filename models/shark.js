var Animal = require('./animal');

function Shark(id, name, color) {
	this.id = id;
	Animal.call(this, name, 'Fish', color);
	this.species = this.constructor.name;
}

Shark.prototype = Object.create(Animal.prototype);
Shark.prototype.constructor = Shark;

Shark.prototype.swim = function () {
	return 'I am swimming.';
};

Shark.prototype.sayFavoriteName = function () {
	return 'My favorite name is JAWS!';
};

module.exports = Shark;