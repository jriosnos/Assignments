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
        this.goldCoins-= 10
        levelUp()
        }
    }
    
    reset(){
    this.goldCoins = 0
    this.lives = 5
    this.healthPoints = 10
    }
    
    doBattle(){
        this.healthPoints-= 1
        
        if (this.healthPoints<1){
            this.lives-= 1
            if (this.lives == 0)
            reset()
        }
    }
    
    }

var playerUno = new Player()
playerUno.collectTreasure()
console.log(playerUno.lives)