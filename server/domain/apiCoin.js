const request = require("request-promise")
const config = require("../config/environment");

class ApiCoin {
    getQuote = (coin) => {
        const coinMayus = coin.toUpperCase().trim();
    
        let options = {
            method: 'GET',
            url: `${config.api.uri}/exchangerate/${coinMayus}/USD`,
            headers: {
                'X-CoinAPI-Key': config.api.token
            },
            json: true
        }
    
        return request(options)
    }

    getQuoteDay = (coin) => {
        const coinMayus = coin.toUpperCase().trim();

        let options = {
            method: 'GET',
            url: `${config.api.uri}/exchangerate/${coinMayus}/USD/history?period_id=1HRS&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00`,
            headers: {
                'X-CoinAPI-Key': config.api.token_2
            }
        }

        console.log(options)

        return request(options)
            .then(res => {
                const resJson = JSON.parse(res)
                return resJson
            })
    }
}

module.exports = ApiCoin
