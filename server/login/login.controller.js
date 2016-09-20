var controller = function(User) {

    return {
        validate: validate
    };

    function validate(input, callback) {
        User.findOne({
            username: input.username,
            password: input.password
        }, function(err, doc) {
            callback(err, doc);
        });
    }

};

module.exports = controller;
