var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Calling greet 1st time');
});


emtr.on('greet',function(){
    console.log('Calling greet 2nd  time');
});

emtr.emit('greet');