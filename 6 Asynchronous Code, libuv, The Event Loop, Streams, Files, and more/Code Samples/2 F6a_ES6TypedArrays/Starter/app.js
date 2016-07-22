/* New feature in ES6 */

var buffer = new ArrayBuffer(8); // size in bytes 8 bits = 1 byte. 00010101 8 * 8 = 64 bits

var view = new Int32Array(buffer); // 32 bits for each numbers

view[0] = 10;
view[1] = 20;
view[2] = 30; // doesn't get logged beacuse each number takes 32 bits.

console.log(view);




