var buff = new Buffer('Narayanan','utf8');
console.log(buff.toString());
console.log(buff.toJSON());

console.log(buff[2]);

buff.write('Hello');
console.log(buff.toString());




