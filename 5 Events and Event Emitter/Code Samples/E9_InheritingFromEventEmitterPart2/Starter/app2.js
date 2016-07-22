var util = require('util');

function Person(){
	this.firstname = 'Narayanan';
	this.lastname = 'Ts';
}

Person.prototype.greet = function(){
	console.log('Welcome to India ' + this.firstname + ' ' + this.lastname);
}

function Seal6(){
	Person.call(this);
	this.badgenumber = 1234;
}

util.inherits(Seal6,Person);

var seal = new Seal6();

seal.greet();



