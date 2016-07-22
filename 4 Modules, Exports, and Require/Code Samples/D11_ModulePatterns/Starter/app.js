//pattern 1
var greet1 = require('./greet1');
greet1();

//pattern 2 of object
var greet2 = require('./greet2').greet;
greet2();

//pattern 3
// created new object and returned it, so any changes will affect
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Greeting changed hello world!';

//pattern 3b
var greet3b = require('./greet3');
greet3b.greet();

//pattern 4
// greet 4 is a constructor function
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

//pattern 5

var greet5 = require('./greet5');
greet5.greet();


