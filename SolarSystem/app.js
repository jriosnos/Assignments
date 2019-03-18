Planet = require(`./Planet`)
Moon = require(`./Moon`)
Star = require(`./Star`)

var milkyWay = new System()
var ourBodies = new Bodies()
var earth = new Planet('earth', '18000tons', '24hrs','365 days')
var eMoon = new Moon('moon', '1200 tons', '1 day', 'earth' )
var sun = new Star('Sun', '1000000000 tons', 'G-type')

earth.add()
eMoon.add()
sun.add()

console.log(milkyWay.bodies)