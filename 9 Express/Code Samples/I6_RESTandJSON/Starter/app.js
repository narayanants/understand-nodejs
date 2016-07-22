var express = require('express');
var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');
var app = express();

var port = process.env.PORT || 3001;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

htmlController(app);
apiController(app);

app.listen(port);