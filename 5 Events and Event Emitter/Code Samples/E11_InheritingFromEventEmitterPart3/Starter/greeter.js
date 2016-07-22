'use strict';

var EventEmitter = require('events');

module.exports = class Greeter extends EventEmitter{
	constructor(){
		super();
		this.greeting = 'Hello World!';
	}
	greet(data){
		console.log('Welcome to India ' + data);
		this.emit('greet',data);
	}
}