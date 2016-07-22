var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
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

	
}