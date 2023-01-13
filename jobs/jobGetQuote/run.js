const config = require("../../server/config/environment");
const saveData = require("../../server/domain/mongoUtils/save.data");
const structCrypto = require("../../server/domain/mongoUtils/struct.crypto");
const mongoose = require("mongoose")
const Promise = require('bluebird');
const ApiCoin = require("../../server/domain/apiCoin");

const coins = config.api.coins

mongoose.connect(config.mongo.uri, config.mongo.options);
// mongoose.connection.on('open', _ => {
//     console.log('Se conecto a MongoDB')
// })

let arrayCoins = coins.split(',');
let api = new ApiCoin();

Promise.map(arrayCoins, (coin) => {
    return api.getQuote(coin)
        .then(res => {
            return saveData(structCrypto(res))
        })
}).then(_ => { 
    // console.log("Ya guarde todo")
    return mongoose.disconnect()
})
