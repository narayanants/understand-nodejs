// Your Javascript Code Goes Here
function Person(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.fullname = function () {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John','Doe');
console.log(john.fullname());

var jane = new Person('Jane','Doe');
console.log(jane.fullname());

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__)