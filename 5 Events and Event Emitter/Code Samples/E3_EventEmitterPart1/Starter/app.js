// var Emitter = require('./emitter');
// var emtr = new Emitter();

// emtr.on('greet',function(){
// 	console.log('Greeted for 1st time!');
// });

// emtr.on('greet',function(){
// 	console.log('Greeted for 2nd time!');
// });

// console.log('Hello');
// emtr.emit('greet');


var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function(){
	console.log('Hello world!');
});	

emtr.on('greet',function(){
	console.log('Hello world for 2nd time');
});

emtr.emit('greet');