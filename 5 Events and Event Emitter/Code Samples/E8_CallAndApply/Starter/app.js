var obj = {
    name:'John Doe',
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

// lets us change what this points to.

obj.greet.call({name:'Jane Doe'}); // single params separated by commas

obj.greet.apply({name:'Jane Doe'}); // array of params