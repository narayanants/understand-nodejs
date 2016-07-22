var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt', {
	encoding:'utf8',
	highWaterMark : 16 * 1024 // how many bytes our 
});

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data',function(chunk){
	console.log(chunk.length);
	writeable.write(chunk);
});

/*
	 default size for createReadStream is 64kB
	 Splits chunks based on specified kB's

*/

