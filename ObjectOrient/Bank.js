class BankAccount {
    constructor (balance, interestRate){
        this.balance = balance
        this.interestRate = interestRate
    }
    deposit(n){
        this.balance+= n
    }
}

var julien = new BankAccount(10000, 0.02)
julien.deposit(4000)
console.log(julien)