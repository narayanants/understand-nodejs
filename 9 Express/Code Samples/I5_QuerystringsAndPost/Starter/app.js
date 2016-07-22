/*
	POST => Content-Type: application/x-www-form-urlencoded
	Query string is moved to the body of the request.
*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3002;

var urlencodedParser = bodyParser.urlencoded({extended:false});

var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id,Qstr: req.query.qstr });
});


app.post('/person',urlencodedParser,function(req,res){
	res.send('Thank You!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/personjson',jsonParser,function(req,res){
	res.send('Thank you for the json data');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port,function(req,res){
	console.log('Listening to port 3000');
});





