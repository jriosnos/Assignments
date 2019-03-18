Bodies = require(`./Bodies`)

class Planet extends Bodies{
    constructor(name, mass, day, year){
        super(name, mass)
        this.day = day
        this.year = year
    }
}


module.exports = Planet