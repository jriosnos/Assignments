Book = require(`./Book`)
Magazine = require(`./Magazine`)

var nationalGEo = new Magazine (`NationalGeo`, 1956, `National Geographic Society`, `New Breeds of Dogs`)
var lifeOfPi = new Book (`Life of Pi`, `2014`, `Yann Martel`)

console.log(nationalGEo)
console.log(lifeOfPi.getSummary)