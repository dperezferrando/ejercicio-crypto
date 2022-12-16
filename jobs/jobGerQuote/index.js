const request = require("request-promise")
const config = require("../../server/config/environment");

const getQuote = (coin) => {
    const coinMayus = coin.toUpperCase()

    let options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/${coinMayus}/USD`,
        headers: {
            'X-CoinAPI-Key': config.api.token
        }
    }

    return request(options)
        .then(res => {
            const resJson = JSON.parse(res)
            return resJson
        })
}

module.exports = getQuote
