System = require(`./System`)

class Bodies extends System{
    constructor(name, mass){
        this.name = name
        this.mass = mass
    }
    get name() {
        return (`This is the ${this.name}`)
    }
}

module.exports = Bodies