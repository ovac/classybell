var passport = require('passport');
var User = require('./../_models/user');

module.exports = function(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done){
        done(null, user);
    });
    passport.deserializeUser(function(user, done){
        done(null, user);
    });

    // Local Strategy Configuration
    require('./passport-strategies/local.strategy')(User);

};
