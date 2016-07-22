//pattern 1
var version1 = require('./v1');
version1();

//pattern 2

var version2 = require('./v2').greet;
version2();

//pattern 3

var version3 = require('./v3');
version3.greet();
version3.greeting = "welcome message changed in version 3!";

var version3b = require('./v3');
version3b.greet();

//pattern 4

var Version4 = require('./v4');
var v4 = new Version4();
v4.greet();

//pattern 5

var version5 = require('./v5').verzion;
version5();
