var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);