Person = require (`./Person`)

class Student extends Person{
    constructor (name){
        super(name)
    }
    get learn(){
        return (`This is awesome`)
    }
}

module.exports = Student