var controller = function(User) {

    return {
        createUser: createUser
    };

    function createUser(input, callback) {

        var newUser = new User(input);
        newUser.save(function(err, data) {
            if (err && (err.toString().match(/ValidationError/) || err.code === 11000)) {
                callback(null, err);
            }
            else{
                callback(err, data);
            }
        });
    }

};

module.exports = controller;
