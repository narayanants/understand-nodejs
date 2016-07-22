'use strict';

var Greeter = require('./greeter');

var emtr = new Greeter();

emtr.on('greet',function(data){
	console.log('Welcome ' + this.greeting);
});

emtr.greet('Narayanan');