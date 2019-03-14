Bodies = require(`./Bodies`)

class Star extends Bodies{
    constructor(name, mass, type){
        super(name, mass)
        this.type = type
    }
}

module.exports = Star