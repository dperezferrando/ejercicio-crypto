var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

CryptoSchema = new Schema({
    "acron_coin": String,
    "name_coin": String,
    "rate_coin": String,
    "rate": Number
});


module.exports = mongoose.model('Crypto', CryptoSchema);;