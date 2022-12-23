const cryptoSchema = require("../../../server/domain/schemas/crypto.schema")
const moment = require('moment')

const diccionario = {
    'ETH': 'Ethereum',
    'BTC': 'Bitcoin',
    'DOGE': 'Dogecoin',
    'SOL': 'Solana'
}

const structCrypto = (value) => {
    const newCrypto = new cryptoSchema({
        "acronym": value.asset_id_base,
        "name": diccionario[value.asset_id_base],
        "originCoin": "USD",
        "rateValue": value.rate,
        "date": moment().format("YYYY-MM-DDTHH:mm:ss")
    })

    return newCrypto;
}

module.exports = structCrypto