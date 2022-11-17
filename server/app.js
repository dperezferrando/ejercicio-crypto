/**
Main application file
*/

require("./srv-globals");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const mongoose = require("mongoose");
const config = require("./config/environment");

mongoose.Promise = require("bluebird")
mongoose.connect(config.mongo.uri, config.mongo.options);
