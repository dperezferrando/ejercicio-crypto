const request = require("request-promise")
const config = require("../../server/config/environment");

const getQuote = (coin) => {
    const coinMayus = coin.toUpperCase().trim();

    let options = {
        method: 'GET',
        url: `${config.api.uri}/exchangerate/${coinMayus}/USD`,
        headers: {
            'X-CoinAPI-Key': config.api.token_2
        }
    }

    return request(options)
        .then(res => {
            const resJson = JSON.parse(res)
            return resJson
        })
}

module.exports = getQuote