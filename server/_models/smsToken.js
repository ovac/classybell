var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SmsToken = new Schema({
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
    collection: 'smsToken'
});

module.exports = mongoose.model('SmsToken', SmsToken);
