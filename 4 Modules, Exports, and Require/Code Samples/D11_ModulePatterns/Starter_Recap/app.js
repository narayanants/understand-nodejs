// Module function pattern
var version1 = require('./version1');
version1.greet();

//Module property pattern

var version2 = require('./version2').greet;
version2();

// Function constructor pattern
var version3 = require('./version3');
version3.greet();
version3.greeting = 'Hello world changed!';

var v3 = require('./version3');
v3.greet();

//Creat
var version4 = require('./version4');
var v4 = new version4();
v4.greet();


//Pattern 5
var version5 = require('./version5').greet;
version5();










