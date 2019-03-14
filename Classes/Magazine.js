const Book = require(`./Book`)

class Magazine extends Book {
    constructor(title, year, author, articleTitle){
        super(title, year, author)
        this.articleTitle = articleTitle
    }
}

module.exports = Magazine