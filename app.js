var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 1337;

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// plugging in our sub-router as middleware
app.use('/api/animals', require('./routes/animal'));

// if we don't catch the request above, we default to a 404
app.use(function (req, res, next) {
  var err = new Error('not found');
  err.status = 404;
  next(err); // triggers error-handling middleware
});

// error-handling middleware (has 4 arguments)
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err);
});

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

module.exports = app;