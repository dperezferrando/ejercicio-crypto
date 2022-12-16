const _ = require('lodash')

var path = require("path");
_.assign(process.env, (() => { try { return require("../local.env"); } catch (error) {} })());

try {
  require("./" + process.env.NODE_ENV);
} catch (error) {
}

module.exports = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + "/../../.."),
  seedDB: false,
  secrets: {
    session: process.env.SESSION_SECRET || "secret"
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  api: {
    token: process.env.API_TOKEN,
    coins: process.env.LIST_COINS,
  }
};
