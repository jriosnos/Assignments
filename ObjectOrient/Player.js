class Player{
    constructor(){
        this.goldCoins = 9
        this.healthPoints = 10
        this.lives = 5
    }
    levelUp(){
        this.lives+= 1
    }
    collectTreasure(){
        this.goldCoins+= 1
        if (this.goldCoins%10 == 0){
        levelUp()
        }
    }
}
var me = new Player()
me.collectTreasure()
console.log(me.lives)