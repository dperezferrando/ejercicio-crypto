const { default: mongoose } = require("mongoose")
const config = require("../../config/environment");

const saveData = (data) => {
    mongoose.Promise = require("bluebird")
    mongoose.connect(config.mongo.uri, config.mongo.options);

    mongoose.connection.on('open', _ => {
        console.log('Se conecto a MongoDB')
    })

    data.save()
        // .then(_ => mongoose.disconnect())
}

// TODO: No funciono el tema de saveAsync

module.exports = saveData