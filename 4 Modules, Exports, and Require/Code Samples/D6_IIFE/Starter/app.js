// Your Javascript Code Goes Here

var firstname = 'John';

(function (lastname) {
    var firstname = 'Jane';
    console.log(firstname);
    console.log(lastname);
})('Doe');

console.log(firstname);