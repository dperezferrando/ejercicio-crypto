var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

CryptoSchema = new Schema({
    "acronym": String,
    "name": String,
    "originCoin": String,
    "rateValue": Number,
    "date": String
});


module.exports = mongoose.model('Crypto', CryptoSchema);;