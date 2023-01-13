const insistentPrompt = require("./utils/insistentPrompt")
const cripto = insistentPrompt("Ingrese criptomoneda")

const criptoUper = cripto.toUpperCase();

module.exports = criptoUper