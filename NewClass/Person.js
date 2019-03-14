class Person {
    constructor (name){
        this.name = name
    }

    get greeting(){
        return (`Hi my name is ${this.name}`)
    }
}

module.exports = Person