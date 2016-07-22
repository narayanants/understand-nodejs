var firstname = 'Jane';

(function (lastname) {

	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
	
}('Doe'));

console.log(firstname);