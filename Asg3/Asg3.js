//Assignement 3

function converter(faren){
    var x = (faren-32)*5/9
    return x
}
console.log(converter(20))

// Assignment 4
function isEven (myNumber){
    var x = myNumber%2
    if (x == 0){
        return true
    }
    else {
        return false
    }
}

console.log(isEven(23))
console.log(isEven(30))

// Assignment 13
digits = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']
en = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
fr = [ 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf']


function iterate(array) {
    for (i=0; i<array.length; i++){
        console.log (array)
    }
}

var object = {}

object