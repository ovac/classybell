var express = require('express');
var router = express.Router();
var app = express();

// var User = require('./../_models/user');
var passport = require('passport');

router.route('/')

.post(function(req, res, next) {
    next();
}, passport.authenticate('local', {
    successRedirect: '/api/dashboard'
}));

app.use(router);

module.exports = app;
