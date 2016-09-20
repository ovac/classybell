var express = require('express');
var router = express.Router();
var app = express();

var User = require('./../_models/user');
var signup = require('./signup.controller')(User);

router.route('/')

    .post(function(req, res) {
        signup.createUser(req.body, function(err, data) {
            if (err) throw new Error(err);
            res.json(data);
        });
    });

app.use(router);

module.exports = app;
