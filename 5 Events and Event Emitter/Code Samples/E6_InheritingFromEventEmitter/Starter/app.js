var EventEmitter = require('events');
var util = require('util');

function Greeter(){
	this.greeting = 'Hello world!';
}

util.inherits(Greeter,EventEmitter);

Greeter.prototype.greet = function(data){
	console.log(this.greeting);
	this.emit('greet',data);
}

var emtr = new Greeter();
emtr.on('greet',function(data){
	console.log('Welcome to India');
	console.log(data);
});

emtr.greet('Narayanan');