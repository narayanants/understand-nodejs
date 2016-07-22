var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());