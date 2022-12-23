const insistentPrompt = require("./utils/insistentPrompt")
const cripto = insistentPrompt("Ingrese criptomoneda")

const criptoUper = cripto.toUpperCase();
console.log(criptoUper)

module.exports = criptoUper