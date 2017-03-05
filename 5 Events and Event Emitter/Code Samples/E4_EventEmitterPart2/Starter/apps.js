var eventEmitter = require('events');
var eventConfig = require('./config');

var emtr = new eventEmitter();

emtr.on(eventConfig.GREET,function(){
    console.log('Greeted!');
});

emtr.on(eventConfig.GREET,function(){
	console.log('someone greeted!');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);
