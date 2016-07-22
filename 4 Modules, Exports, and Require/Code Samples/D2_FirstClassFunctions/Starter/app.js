// Your Javascript Code Goes Here
function greet() {
    console.log('Hi');
}

//functions are first-class
function logGreeting(gun) {
    gun();
}

logGreeting(greet);

//function expression

var greets = function () {
    console.log('Hi Narayanan');
};

logGreeting(greets);

//use a function expression on the fly
logGreeting(function(){
    console.log('Hello Narayanan');
});