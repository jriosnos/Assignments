var faveColors = ['pink', 'purple', 'red', 'blue']
var familyAge = [22, 27, 56, 63, 39]
var coins = ['heads', 'heads', 'tails', 'heads', 'tails']
var artists = ['florence', 'emma ruth', 'Gwen Stefani', 'worlds end girlfriend']

var words = {
    food: 'sustenance',
    music: 'joy in sound',
    computer: 'entertainment machine',
}
var movies = {
    ScottPilgrim: 2008,
    CoCo: 2018,
    FantasticFox: 2012,
}
var cities = {
    Toronto: 20000000,
    Montreal: 10000000,
    NYC: 100000000,
}
var familyAges = {
    Julien: 22,
    Jack: 27,
    Tomek: 39,
    Papa: 60,
    Colston: 53,
}

// Excercise 1

// console.log(coins)
// console.log(faveColors[0])
// console.log(familyAge.sort())
// familyAge.push(0)
// console.log(familyAge.sort())
// console.log(movies.CoCo)

// Excercise 2

var lastArray = x => {
    return x[x.length-1]
}
// console.log(lastArray(faveColors))
// cities.NewOrleans = 500000
// console.log(cities)
// coins.reverse()
// console.log(coins)
// console.log(cities.Toronto)
// artists.forEach(x => {
//     console.log(`I think ${x} is a great artist`)
// })

// Excercise 3
//console.log(artists.slice(0, 2))
// Object.keys(movies).forEach( x => {
//     console.log(`${x} came out in ${movies[x]}`)
// })
//console.log(familyAge.sort().reverse())
// movies.Beauty = [1991, 2017]
// console.log(movies)

// Excercise 4
// Object.keys(familyAges).forEach( x=> {
//     if(familyAges[x]< 30){
//         console.log(`${x} is young`)
//     } else {console.log(`${x} is old`)}
// })
// console.log(Math.max.apply(null, familyAge))
var numHeads = 0
var numTails = 0
coins.forEach( x => {
    if(x = 'heads'){
        numHeads+= 1
    } else{
        numTails+=1
    }
})
console.log(numHeads)
console.log(numTails)

