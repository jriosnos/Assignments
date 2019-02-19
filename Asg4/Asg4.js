// Assignment 5

colors = [ 'blue', 'pink', 'red', 'purple', 'black']
family = [ 22, 39]
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

function lastElement (x){
    return x[x.length - 1]
}

cities.vancouver = 200000

var reversed = coins.reverse()

family.push(0)


artists.forEach (function(person){
    console.log (`I think ${person} is an amazing performing artist`)
})