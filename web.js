var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
fs.readFile('index.html',function( err, data){
	if (err) throw err;
	var buffer = new Buffer(data);
	response.send(buffer.toString());
});

});
//app.get('/', function(request, response) {
//  response.send('Hello World22!');
//});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
