const prompt = require("readline-sync")
const _ = require("lodash")

module.exports = (text, type = "question") => {
  let response = ""
  while(response == "")
    response = prompt[type](`${text} `)
  return response
}