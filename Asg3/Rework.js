// function isEven (x){
//     y = x%2
//     if (y=0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isEven(6))

// function wordLength(x){
//     if(x.length>8){
//         return false
//     }
//     else{
//         return true
//     }
// }
// console.log(wordLength('iamhereiamqueer'))

// function greetBackwards (x){
//     y = x.split('')
//     z = y.reverse()
//     a = z.toString().replace(/,/g, '')
//     return a
// }
// console.log(greetBackwards('Shirley'))

// function wrapText(input, wrap){
// return wrap + input + wrap
// }
// console.log(wrapText('hello', '---==##'))
// console.log(["hello", 7, true].length)

var faveColors=["pink", "red", "blue", "purple"]
var ages=[22, 27, 19, 21, 34]
var coin=['tails', 'heads', 'heads', 'tails', 'tails']
var artists=['florence', 'emma', 'gwen']

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
    Papa: 60,
    Tomek: 39,
    Jack: 27,
}
var moviesYear = {
    1999: ["The Matrix", "Star Wars: Episode 1", "The Mummy"],
    2009: ["Avatar", "Star Trek", "District 9"],
    2019: ["How to Train Your Dragon 3", "Toy Story 4", "Star Wars: Episode 9"],
}

// var certainAge = ages.map(x=>{
//     if(x<30){
//        return x
//     }
// })

// console.log(certainAge)

// console.log(artists.slice(0,2))

// console.log(ages.sort(function(a,b){a-b}).reverse())
// movies.BeautyandTheB = [1991, 2017]
// console.log(movies)

// function getMaxArray(x){
//     return Math.max.apply(null, x)
// }
// console.log(getMaxArray(ages))

// artists.splice(2,1)
// console.log(artists)

// cities.NYC = 2000000000
// console.log(cities)

// Object.keys(cities).forEach(x=>{
//     var total = 0
//     total +=parseFloat(cities[x])
//     console.log(total)
// })

// function reducer (a,b){
//     return a+b
// }
// console.log(Object.values(cities).reduce(reducer))

// var ages = Object.keys(familyAges).forEach(x=>{
//     if(familyAges[x]<30){
//         console.log(`${x} is young`)
//     }
//     else{console.log(`${x} is old`)}
// })
// console.log(ages)
console.log(faveColors.slice(2))