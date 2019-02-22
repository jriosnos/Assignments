// Excercise 0

colors = [ 'blue', 'pink', 'red', 'purple', 'black']
family = [ 22, 39, 60, 63]
coins = ['heads', 'tails', 'heads', 'heads', 'tails']
artists = ['florence', 'gwen', 'emma'] 

var words = { 
    food: 'sustenance',
    weed: 'devils lettuce',
    netflix: 'service'
}

var movies =  {
    SPVTW: 2006,
    dust:  2000,
    spiderman: 2002
}

var cities = {
    toronto: 100000,
    NYC: 500000,
    Montreal: 20000
}

var people = {
    Jack: 26,
    Karen: 22,
    Tomek: 39
}

//Excercise 1

//family.push(0)

//Excercuse 2
function lastElement (x){
    return x[x.length - 1]
}

cities.vancouver = 200000

//var reversed = coins.reverse()


//artists.forEach (function(person){
   // console.log (`I think ${person} is an amazing performing artist`)
//})

//Excercise 3

//console.log(coins.slice(0,2))


//Object.keys(movies).forEach(function(vls){
    //console.log( vls + " came out in " + movies[vls] )
//})


//var sortReverse = family.sort(function (a, b){return a - b}).reverse()
//console.log(sortReverse)


//movies.BeautyandTheBeast = "1991 and 2017"
//console.log(movies)

//Excercise 4 

//var familyfilter = family.filter(value => value>30) 
//console.log(familyfilter)

//console.log(Math.max.apply(null, family))

"Ask Karen if she knows functions operatons for counts"
// var counts = {}
// coins.forEach(function(x){x => counts[x] += 1})
// console.log(counts)

//var removal = artists.splice(1,2)
//console.log(artists)

//var removal = artists.splice(1,2)
//console.log(artists)

//cities.Montreal = 400000
//console.log(cities.Montreal)

//Excercise 5

//function getSum(a, b){
    //return a + b
//}
//var sum = Object.values(cities).reduce(getSum)
//console.log(sum)

//Object.keys(people).forEach(name => {
        //if (people[name]<30){
            //console.log( ` ${name} is young`)
        //}
        //else{ 
            //console.log(` ${name} is old`)
        //}})
        
//console.log(colors.slice(colors.length -3, colors.length))

//let increment = family.map(incr =>{ 
      //return incr+1;
//});
//console.log(increment)

var moviesYear = {
    1999: ["The Matrix", "Star Wars: Episode 1", "The Mummy"],
    2009: ["Avatar", "Star Trek", "District 9"],
    2019: ["How to Train Your Dragon 3", "Toy Story 4", "Star Wars: Episode 9"],
}

topLine = [1,2,3]
middleLine = [4,5,6]
bottomLine = [7,8,9]
lastLine = ["*", 0, "#"]

countries = [Latin = {
    country: 'Colombia',
    continent: 'South America',
    Island: 'No',
},
white = {
    country: 'Poland',
    continent: 'Europe',
    Island: 'No'
},
JPN = {
    country: 'Japan',
    continent:'Asia',
    Island: 'Yes',
}]

//for(i = 0; i<20; i++){
    //console.log("I wil not skateboard in the halls")
//}

//var newArray = []
//for(i = 0; i<20; i++){
    //var writing = "I will not skateboard in the halls"
    //newArray.push(writing)
//}
//console.log(newArray)

//AsK Karen for how to loop using forEach to sum array
// var numberedArray = []
// for (i=1; i<=50; i++){
//     numberedArray.push(i);
    
// }

// var sumOfNumbers = 0

// numberedArray.forEach( (a) => {
//     sumOfNumbers+= a
// })
// console.log(sumOfNumbers)

//console.log (numberedArray.reduce((a,b) => {return a+b}))
//this.numberedArray.forEach(value => {
    //this.sum += value;
//}, this))

//var multipleNArray = []
//for (i = 1; i<=50; i++){
    //multipleNArray.push(i);
   //multipleNArray.push(i);
    //multipleNArray.push(i);
//}
//console.log(multipleNArray)

// var islands = []
// countries.forEach(country => {
//     if ( country.Island == 'Yes'){
//         islands.push(country)
//     }
// })
// console.log(islands)

// var expenseTotal = 0
// expenses = [250, 7.95, 30.95, 16.50]
// expenses.forEach(x => {expenseTotal+= x})
// console.log(expenseTotal)

var students = {
    class1: 34.00,
    class2: 42.00,
    class3: 22.00
  }

// Object.keys(students).forEach(person => {
//     console.log(`${person}: ${students[person]}`)
// })
  
// students.class4 = 43
// // console.log(students.class4)

// Object.keys(students).forEach(x => {
//   students[x]*= 1.05
// })
// console.log(students)

delete students['class2']
console.log(students)

