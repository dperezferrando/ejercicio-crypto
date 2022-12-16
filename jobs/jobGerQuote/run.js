const { default: mongoose } = require("mongoose");
const getQuote = require(".");
const config = require("../../server/config/environment");
const saveData = require("../../server/domain/mongoUtils/save.data");
const structCrypto = require("../../server/domain/mongoUtils/struct.crypto");

const coins = config.api.coins

mongoose.Promise = require("bluebird")
mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('open', _ => {
    console.log('Se conecto a MongoDB')
})

coins.split(',').map(coin => {
    getQuote(coin)
        .then(res => saveData(structCrypto(res)))
        .then( _ => mongoose.disconnect())
})
