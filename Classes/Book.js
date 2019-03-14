class Book {
    constructor(title, year, author){
        this.title = title
        this.year = year
        this.author = author
    }

    get getSummary(){
        return (`${this.title} was released in ${this.year} by the author ${this.author}`)
    }
}

module.exports = Book