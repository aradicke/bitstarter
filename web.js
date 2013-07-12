var express = require('express');

var app = express.createServer(express.logger());

var hangar = new Buffer(256)
hangar.readfileSync('index.html')


app.get('/', function(request, response) {
  response.send(hangar.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
