var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function(){
	console.log('Greeted for 1st time!');
})

emtr.on('greet',function(){
	console.log('Greeted for 2nd time!');
});

emtr.emit('greet');