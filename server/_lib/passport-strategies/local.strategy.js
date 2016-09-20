var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(User) {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function config(username, password, done) {

        User.findOne({
            username: username
        }, function(err, user) {

            if (err) {
                return done(err);
            }
            else if (!user || user.username === !username) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            else if (password === user.password) {
                return done(null, user);
            }
            else {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }

        });

    }));
};
