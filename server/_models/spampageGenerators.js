var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spampageGenerators = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique : true
    },
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        lowercase: true,
        default: 'spampage-generator'
    },
    site: {
        type: String
    },
    images: [{url: String, primary: Boolean}],
    usecount: {
        type: Number
    },
    uploaded: {
        by: String,
        on: Date
    }
}, {
    collection: 'spampageGenerators'
});

module.exports = mongoose.model('SpampageGenerators', spampageGenerators);
