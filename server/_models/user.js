var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: {
        type: String,
        required: true,
        unique : true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        match: /.+@.+/
    },
    rank: {
        type: Number,
        required: true,
        lowercase: true,
        default: 0
    },
    signupDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    gender: {
        type: String,
        lowercase: true
    },
    purchased: {
        by: {
            type: String,
            lowercase: true
        },
        on: Date,
        price: Number,
        using: {
            type: String,
            lowercase: true
        }
    },
    uploaded: {
        by: String,
        on: Date
    }
}, {
    collection: 'user'
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
