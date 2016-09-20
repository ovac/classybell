// CODDED WITH ❤ BY OVAC RICHKID BOYA
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var logger = require('morgan');

app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(logger('dev'));

// Pusher Configurations.
// require('./_lib/pusher');

// All of MongooseJS Configurations.
require('./_lib/mongoose');

// All if PassportJS configurations.
require('./_lib/passport')(app);

// All Api routes
app.use('/api', require('./app.route'));

// Serve AngularJS Hashbang URL
app.get('*', function(req, res) {
    res.redirect( '/#'+ req.originalUrl );
});

module.exports = app;
