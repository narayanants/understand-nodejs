'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	constructor() {
		super();
		this.greeting = 'Hello world!';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}