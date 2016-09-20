var app = require('express')();
var authenticate = require('./_lib/authenticate');

//Routes here are used to setup authentication.
app.use('/login', require('./login'));
app.use('/signup', require('./signup'));

//Routes below this line require Rank(0) authentication
app.use(authenticate());
// app.use('/dashboard', require('./dashboard'));
// app.use('/token', require('./token'));
// app.use('/logs', require('./logs'));
// app.use('/account', require('./account'));
// app.use('/leads', require('./leads'));
// app.use('/users', require('./users'));
// app.use('/hacktools', require('./hacktools'));

module.exports = app;
