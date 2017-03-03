function Version(){
    this.greeting  = 'Welcome to version 3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Version();

