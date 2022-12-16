/**
Main application file
*/

require("./srv-globals");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const mongoose = require("mongoose");
const obtenerCotizacion = require("../jobs");
const config = require("./config/environment");

mongoose.Promise = require("bluebird")
mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('open', _ => {
    console.log('Se conecto a MongoDB: ', config.mongo.uri)
})

let cripto = require("./console.js")

obtenerCotizacion(cripto)