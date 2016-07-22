module.exports = function(app){
	var bodyParser = require('body-parser');
	var urlencodedParser = bodyParser.urlencoded({ extended: false });
	var jsonParser = bodyParser.json();
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/person/:id', function(req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});

	app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank you!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});

	app.post('/personjson', jsonParser, function(req, res) {
		res.send('Thank you for the JSON data!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});

}