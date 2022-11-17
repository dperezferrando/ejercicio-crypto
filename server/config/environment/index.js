var path = require("path");

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
  }
};
