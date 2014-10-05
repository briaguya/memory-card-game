
'use strict';

var express = require('express'),
  app = express(),
  http = require('http');

app.locals.title = 'Memory Card Game';

// Create static public directory
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 1337);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Memory Card is running at localhost:', app.get('port'));
});
