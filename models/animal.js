function Animal(name, type, color) {
	this.name = name;
	this.type = type; // animal type: Mammal, Reptile, etc...
	this.color = color;
	this.offspring = [];
}

Animal.prototype.giveBirth = function (color) {
	var newBaby = new Animal('Baby ' + this.name, this.type, color);
	this.offspring.push(newBaby);
	return newBaby;
};

Animal.prototype.makeNoise = function () {
	return 'I am making noise! Can you hear me?';
};

Animal.prototype.sayName = function () {
	return 'Hello, my name is ' + this.name;
};

module.exports = Animal;