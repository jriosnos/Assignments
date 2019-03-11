class Player{
    constructor(){
        this.goldCoins = 9;
        this.healthPoints = 10;
        this.lives = 5;
    }
    levelUp(){
        this.lives+= 1
    }
    collectTreasure(){
        this.goldCoins+= 1
        if (this.goldCoins%10 == 0){
        levelUp()
        }
    doBattle(){
        this.healthPoints-= 1
        if (this.healthPoints<1){
            this.lives-= 1
            if (this.lives == 0)
            reset(){
                this.goldCoins = 0
                this.lives = 5
                this.healthPoints = 10
            }
        }
    }
    }
}
var me = new Player()
me.collectTreasure()
console.log(me.lives)