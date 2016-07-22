function Greetr(){
    this.greeting = 'Hello world from pattern 3' ;
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();

//creates a brand new object