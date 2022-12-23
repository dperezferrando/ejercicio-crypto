const getQuote = require(".");
const config = require("../../server/config/environment");
const saveData = require("../../server/domain/mongoUtils/save.data");
const structCrypto = require("../../server/domain/mongoUtils/struct.crypto");

const coins = config.api.coins

coins.split(',').map(coin => {
    getQuote(coin)
        .then(res => {
            saveData(structCrypto(res))
        })
    })