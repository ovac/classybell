var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpamLogs = new Schema({
    login: {
        type: String,
        required: true,
        lowercase: true,
        unique : true
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    },
    spamdate: {
        type: String,
        required: true,
        lowercase: true
    },
    type: {
        type: String,
        required: true,
        lowercase: true
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        match: /(?:male|female|unknown)/
    },
    price: {
        type: Number,
        required: true,
        default: 20
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
    collection: 'SpamLogs'
});

module.exports = mongoose.model('SpamLogs', SpamLogs);
