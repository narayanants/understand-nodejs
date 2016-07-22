//pattern 4
// don't want same object from cache when creating a new object using constructor funciton

function Greetr(){
    this.greeting = 'Hello world from pattern 4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;