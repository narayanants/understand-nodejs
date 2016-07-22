//pattern 1
var oppo1 = require('./oppo1');
oppo1();

//pattern 2

var oppo2 = require('./oppo2');
oppo2.greet();


//pattern 3

var oppo3 = require('./oppo3');
oppo3.fullname();
oppo3.lastname = 'Tony';

var oppo3b = require('./oppo3');
oppo3b.fullname();


//pattern 4

var Oppo4 = require('./oppo4');

var oppo4 = new Oppo4('Narayanan','Ts');
oppo4.fullname();


//pattern 5

var oppo5 = require('./oppo5');
oppo5.OPPO5();

