function greet(callback){
	console.log('Hello');
	var data = {
		name: 'Narayanan Ts'
	};
	callback(data);
}

greet(function(data){
	console.log('First Greeting');
	console.log(data);
});

greet(function(data){
	console.log('Second Greeting');
	console.log(data.name);
});

