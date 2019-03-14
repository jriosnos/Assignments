Bodies = require(`./Bodies`)

class Moon extends Bodies{
    constructor(name, mass, month, planet){
        super(name, mass)
        this.month = month
        this.planet = planet
    }
}

module.exports = Moon