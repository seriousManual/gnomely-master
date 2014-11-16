var express = require('express');

var configuration = require('./configuration');
var gnomelyApi = require('./gnomely-api/appFactory');

var app = express();

app.use(express.static(__dirname + '/gnomely-web'));

gnomelyApi.create(function(error, api) {
    if (error) console.log('error: ' + error);

    app.use('/api', api);
});