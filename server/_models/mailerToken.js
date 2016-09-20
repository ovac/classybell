var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MailerToken = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    limit: {
        type: String,
        required: true
    },
    purchased: {
        by: String,
        on: Date,
        price: Number,
        using: String
    },
    uploaded: {
        by: String,
        on: Date
    }
}, {
    collection: 'mailerToken'
});

module.exports = mongoose.model('MailerToken', MailerToken);
