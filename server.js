var express = require('express');

var gnomelyApi = require('./gnomely-api/appFactory');

var app = express();

app.use(express.static(__dirname + '/public'));