var eventEmitter = require('events');
var eventConfig = require('./config');

var emtr = new eventEmitter();

emtr.on(eventConfig.GREET,function(){
    console.log('Greeted!');
})

emtr.on(eventConfig.GREET,function(){
    console.log('Greeted 2nd time');
});

console.log('GREETED!');
emtr.emit();