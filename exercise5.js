var express = require('express');
var app = express();
var path = require('path');

app.get('/createContent', function (req, res) {
    res.sendFile(path.join(__dirname + '/form.html'));
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});