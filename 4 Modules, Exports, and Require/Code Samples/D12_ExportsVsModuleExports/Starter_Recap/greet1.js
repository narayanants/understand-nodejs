exports.greet = function(){
    console.log('Hello world!');
}

console.log(exports);
console.log(module.exports);

// (function(exports,require,module,__filename,__dirname){
//     var greet = function(){
//         console.log('Hello!');
//     };
//     module.exports = greet;
// });

// fn(module.exports,require,module,__filename,__dirname);
// return module.exports;
