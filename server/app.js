/**
Main application file
*/

require("./srv-globals");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const mongoose = require("mongoose");
const config = require("./config/environment");
const cryptoSchema = require("./domain/schemas/crypto.schema");
const asciichart = require('asciichart');

mongoose.Promise = require("bluebird")
mongoose.connect(config.mongo.uri, config.mongo.options);

// mongoose.connection.on('open', _ => {
//     console.log('Se conecto a MongoDB: ', config.mongo.uri)
// })

let cripto = require("./console");

cryptoSchema.find({ acronym: cripto })
    .then(data => {
        // console.log(data)
        let graficValues = data.map(coin => coin.rateValue)

        console.log(asciichart.plot(graficValues))
    })

