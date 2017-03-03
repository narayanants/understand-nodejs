// create function constructor in app.js

function Version(){
    this.greeting = "Hello from V4";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Version();