var fs = require('fs');

var zlib = require('zlib'); // compression algorithm


var readable = fs.createReadStream(__dirname + '/greet.txt');

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

/*If duplex?*/

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);

/* Stream to Stream to Stream */