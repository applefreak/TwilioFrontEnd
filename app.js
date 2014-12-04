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
	var fromNumber = '{{YOUR FROM NUMBER}}';
	var toMessage = req.body.msg;
	var sid = '{{YOUR SID}}';
	var tkn = '{{YOUR TOKEN}}';
	var twilio = require('twilio')(sid, tkn);

	twilio.messages.create({
		body: toMessage,
		to: "+" + toNumber,
		from: "+" + fromNumber
	}, function(err, message) {
		if (err) {
			console.log(err);
			var rtn = {
				error: true,
				msg: err.message
			};
			res.send(rtn);
		} else {
			console.log(message);
			var rtn = {
				error: false,
				msg: message.status
			};
			res.send(rtn);
		}
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
