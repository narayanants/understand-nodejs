function Version(){
    this.greeting  = 'Welcome to version 4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Version;