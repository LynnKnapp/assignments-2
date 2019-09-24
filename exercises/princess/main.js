// let readlineSync = require("readline-sync");
// const namePicked =["mario", "luigi"]

class Player{
  constructor(name,totalCoins, status, hasStar){
  this.name = name
  this.totalCoins = totalCoins
  this.status = status
  this.hasStar = hasStar 
  }
  
  setName(namePicked) {
    if (namePicked === "Mario"){
        this.name = "Mario"
    }else if(namePicked === "Luigi"){
        this.name = "Luigi"
    }  
     console.log(this.name)
  } 
  gotPowerUp(powerLevel){
      if (powerLevel === "small"){
          this.status = "small"
      }else if(powerLevel === "big"){
          this.status = "big"
      }else if(powerLevel === "powered up"){
          this.status = "powered up"
      }
      console.log(gotPowerUp("powered up"))
    //   console.log(this.status)
  } 
}  

const mario1 = new Player("Mario", 0, "alive", true)
console.log(mario1)
const luigi = new Player("Luigi", 0, "alive", true)
status.gotPowerUp("big")
console.log(status)