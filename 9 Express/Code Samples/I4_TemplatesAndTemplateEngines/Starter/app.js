var express = require('express');
var app = express();

var port = process.env.PORT || 3002;

app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/',function(req,res,next){
	console.log('Request URL:' + req.url);
	next();
});

app.get('/',function(req,res){
	res.render('index');
});

app.get('/person/:id',function(req,res){
	res.render('person',{ID:req.url.id});
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);