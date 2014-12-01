var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index.html');
});

app.post('/api/send',function(req,res){
	var toNumber = req.body.to;
	var fromNumber = req.body.from;
	var toMessage = req.body.msg;
	var sid = eq.body.to;
	var tkn = req.body.msg;
	res.send('V1 :' + query1 + 'V2: ' + query2);
	console.log('V1 :' + query1 + 'V2: ' + query2);
	var twilio = require('twilio')(sid, tkn);

	twilio.messages.create({
		body: toMessage,
		to: "+" + toNumber,
		from: "+" + fromNumber
	}, function(err, message) {
		process.stdout.write(message.sid);
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
