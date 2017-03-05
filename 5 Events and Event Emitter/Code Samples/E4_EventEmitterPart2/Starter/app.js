/* on is just a shorthand for addListener */

var eventEmitter = require('events');

var eventConfig = require('./config');

var emtr = new eventEmitter();

emtr.on(eventConfig.GREET,function(){
	console.log('Greeted!');
});

emtr.on(eventConfig.GREET,function(){
	console.log('someone greeted!');
});

console.log('Heloooo!');
emtr.emit(eventConfig.GREET);








