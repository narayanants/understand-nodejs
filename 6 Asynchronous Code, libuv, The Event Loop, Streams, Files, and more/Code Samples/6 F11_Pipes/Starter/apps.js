var fs = require('fs');
var zlib = require('zlib');
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var gzip = zlib.createGzip(); // compress the file

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);
