System = require(`./System`)

class Bodies extends System{
    constructor(name, mass){
        super()
        this.name = name
        this.mass = mass
    }
    
    name() {
        return (`This is the ${this.name}`)
    }
}

module.exports = Bodies