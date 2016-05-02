var express = require('express');
var app = express();

var num1;
var num2;
var result;
var newObj = {};
var operation;

app.get('/calculator/:operator', function (req, res) {
  num1= parseInt(req.query.num1, 10);
  num2= parseInt(req.query.num2, 10);
  operation = req.params.operator;
  if(req.params.operator === "add") {
    result = num1 + num2;
  } else if (req.params.operator === "mult") {
    result = num1 * num2;
  } else if (req.params.operator === "sub") {
    result = num1 - num2;
  } else if (req.params.operator === "div") {
    result = num1 / num2;
  }
  res.send(JSON.stringify({"operator": operation,
      "firstOperand": num1,
      "secondOperand": num2,
      "solution": result
     }));
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
