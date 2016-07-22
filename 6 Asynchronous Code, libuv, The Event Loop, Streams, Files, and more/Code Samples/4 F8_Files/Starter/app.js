var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');

/*
	readFileSync means it  when line of code is run by JS engine, it will wait till the buffer is filled.

	The file is loaded into the buffer, because buffer can deal with binary data.

*/
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt','utf8',function(err,data){
	console.log(data);
});

console.log('Done!');

/*
	returns a Buffer. Returns a buffer full of binary data

	fs.readFile() = > ask node to fetch the file and it logs done 

	Then when the file is fetched, it executes the callback.
*/
