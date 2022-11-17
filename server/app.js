/**
Main application file
*/

require("./srv-globals");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log("B")
const mongoose = require("mongoose");
console.log("C")
const config = require("./config/environment");

mongoose.Promise = require("bluebird")
console.log("A")
mongoose.connect(config.mongo.uri, config.mongo.options);
