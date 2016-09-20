var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spamLink = new Schema({
    url: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    },
    type: {
        type: String,
        required: true,
        lowercase: true
    },
    token: {
        type: String,
        required: true,
        lowercase: true
    },
    lifespan: {
        type: String,
        required: true,
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
        },
    },
    uploaded: {
        by: {
            type: String,
            lowercase: true
        },
        on: Date
    }
}, {
    collection: 'spamLink'
});

module.exports = mongoose.model('spamLink', spamLink);
