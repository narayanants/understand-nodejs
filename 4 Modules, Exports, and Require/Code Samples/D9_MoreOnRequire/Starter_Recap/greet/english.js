var greeting  = require('./greetings.json');
var greet = function(){
    console.log(greeting.en);
}

module.exports = greet;