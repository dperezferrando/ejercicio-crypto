const request = require("request-promise")
const cryptoSchema = require("../server/domain/schemas/crypto.schema")

const diccionario = {
    'ETH': 'Ethereum',
    'BTC': 'Bitcoin',
    'DOGE': 'Dogecoin',
    'SOL': 'Solana'
}

const obtenerCotizacion = (coin) => {
    let options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/${coin}/USD`,
        headers: {
            'X-CoinAPI-Key': '6A38D891-F991-41E0-89B2-AF795EE19EE0'
        }
    }

    return request(options)
        .then(res => {
            const resJson = JSON.parse(res)
            console.log(resJson.asset_id_base, resJson.rate)

            const newCrypto = new cryptoSchema({
                "acron_coin": resJson.asset_id_base,
                "name_coin": diccionario[resJson.asset_id_base],
                "rate_coin": "USD",
                "rate": resJson.rate
            })

            newCrypto.save((err, document) => {
                if(err) console.log("Error: ", err)
                console.log(document)
            })
        })
}

module.exports = obtenerCotizacion
