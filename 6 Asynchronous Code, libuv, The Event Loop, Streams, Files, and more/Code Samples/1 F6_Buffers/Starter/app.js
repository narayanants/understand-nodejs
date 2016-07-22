/*Bufers in node*/

var buffer = new Buffer('Narayanan','utf8'); // take the string and convert it into binary data.
console.log(buffer);

console.log(buffer.toString());
console.log(buffer.toJSON()); // JS objects with numbers representing unicode characters

console.log(buffer[2]); // gives the character set (unicode)

buffer.write('Hello');
console.log(buffer.toString()); // writes to the begining of the buffer.




/* most times buffers are something that's coming back from somether utility or object.*/

