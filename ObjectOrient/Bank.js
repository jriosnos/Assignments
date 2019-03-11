class BankAccount {
    constructor (balance, interestRate){
        this.balance = balance
        this.interestRate = interestRate
    }
    deposit(n){
        this.balance+= n
    }
    withdraw (n){
        this.balance-= n
    }
    gainInterest(){
        this.balance*= this.interestRate
    }
}

var julien = new BankAccount(10000, 1.02)
julien.deposit(4000)
julien.withdraw(2000)
julien.gainInterest()
console.log(julien)