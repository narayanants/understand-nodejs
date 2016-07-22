var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
	res.send('Hello world!');
});

app.get('/api',function(req,res){
	res.json({firstname:'Narayanan',lastname:'Ts'});
});

app.get('/person/:id',function(req,res){
	res.send('<html><head></head><body><h1>Person' + req.params.id + '<h1></body></html>');
});

app.listen(port);