var ballots = [{1: 'Smudge', 2: 'Tigger', 3: 'Simba'},
           {1: 'Bella', 2: 'Lucky', 3: 'Tigger'},
           {1: 'Bella', 2: 'Boots', 3: 'Smudge'},
           {1: 'Boots', 2: 'Felix', 3: 'Bella'},
           {1: 'Lucky', 2: 'Felix', 3: 'Bella'},
           {1: 'Smudge', 2: 'Simba', 3: 'Felix'}]

var bella = 0
var lucky = 0
var tigger = 0
var simba = 0
var felix = 0
var smudge = 0 
var boots = 0

ballots.forEach(a=> {
    if (a[1]== 'Smudge'){ smudge+=3}
    if (a[1]=='Bella'){bella+=3}
    if (a[1]=='Boots'){boots+=3}
    if (a[1]=='Lucky'){lucky+=3}

    if (a[2]=='Tigger'){tigger+=2}
    if (a[2]=='Lucky'){lucky+=2}
    if (a[2]=='Boots'){boots+=2}
    if (a[2]=='Felix'){felix+=2}
    if (a[2]=='Simba'){simba+=2}

    if (a[3]=='Smudge'){smudge+=1}
    if (a[3]=='Bella'){bella+=1}
    if (a[3]=='Boots'){boots+=1}
    if (a[3]=='Lucky'){lucky+=1}
})

console.log(bella)
console.log(boots)
console.log(smudge)
console.log(tigger)
console.log(simba)
console.log(lucky)
console.log(felix)