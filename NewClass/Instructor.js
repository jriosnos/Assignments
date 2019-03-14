Person = require(`./Person`)

class Instructor extends Person{
    constructor(name){
        super(name)
    }
    get teach(){
        return `This is awesome!`
    }
}

module.exports = Instructor