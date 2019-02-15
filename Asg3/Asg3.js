function converter(faren){
    var x = (faren-32)*5/9
    return x
}
console.log(converter(20))


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