const readlineSync = require("readline-sync");
console.log("Hello, welcome.")

let gameOver=false
let hasWon= true
let item = []

 const george = {
     name: "George",
     hp: 150,
     attack: 20,
     item: [],
     tagLine: "George is getting upset" 
} 
      
const elaine = {
    name: "Elaine",
    hp: 150,
    attack: 20,
    item: [],
    tagLine: "Yada Yada Yada, your through"
} 
      
const jerry = {
    name:"Jerry",
    hp: 150, 
    attack: 20, 
    item: [],
    tagLine: "Serenity now, insanity later." 
}
const kramer = {
    name: "Kramer", 
    hp:  150,
    attack:  20,
    item: [], 
    tagLine: "I'm out there and I'm lovin every minute of it"
}
let players = [george.name, elaine.name, jerry.name, kramer.name]
console.log('player: ', players)



let options = readlineSync.keyInSelect(players,"Which player do you choose?") 
     if(options === 0){
         
    console.log("You've selected George" )    
     } else if (options === 1){
         
        console.log("You selected Elaine")    
     }else if (options === 2){
         
        console.log("You've selected Jerry") 
     }else {
         
        console.log("You've selected Kramer")
     }
     
   
function enemy(name, hp, attack, item, tagLine){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.item = item;
    this.tagLine = tagLine;
} 
let newman = new enemy("Newman", 120, 20, "mailbag", "When you control the mail, you control information")   
let soupNazi = new enemy("Soup Nazi", 100, 15,"crab bisque", "no soup for you, 1 year")
let frankCostanza = new enemy("Frank Costanza", 110, 10, "frank's cooking", "You want a piece of me, you want a piece of me.  You got it!!")
let enemies = [newman, soupNazi, frankCostanza]

function jerkStoreAppears(enemies){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum=== 0){
      console.log("Hold onto your food, you encountered Newman, Hahahaha" )
    } else if(randomNum === 1){
        console.log("Get in line and kiss your soup goodbye.")
    }else{
        console.log("I've got a lot of problems with your people.  Now perform the feats of strength.")
    }          
}
const ready = readline.keyInYN ("Do you want to walk?")  
if (ready === yes){ 
    while (players.hp > 0) {
        let walk = readline.keyInYN ("Do you want to walk?")   
        // console.log(walk) 
        if (walk === true) {
            console.log("Your now walking.")
            const altercation = jerkStoreAppears() 
            
            if (altercation){
                let fight =readline.keyInSelect ("Do you want to fight or run?")
                console.log (fight)

                if (fight === yes){
                    let currentJerk = jerkStoreAppears()
                    let randomNum = Math.floor(Math.random() * 3)

                    if (randomNum === 0) {
                            console.log ("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.") 
                        } else if (randomNum === 1){
                            console.log("Refuse to get in the line.  He'll go into his bunker and shoot himself.")
                        }else{
                            console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
                        }     
                            // console.log(Enemy) refer to bossman1
                            while(player.health > 0 && currentEnemy.health > 0 ){
                                // if (player === attackEnemy
                                attackEnemy(currentEnemy)
                                attackPerson(currentEnemy)
                                dropItem(currentEnemy)
                                console.log(currentEnemy)
                                console.log(player)
                            }
                    }else if (randomNum === 1) {
                        console.log ("Use your hookshot to draw " + currentEnemy.name + " close,then attack quickly before he kicks your ass.")
                        while(player.health > 0 && currentEnemy.health > 0 ){
                            attackEnemy(currentEnemy)
                            attackPerson(currentEnemy)
                            dropItem(currentEnemy)
                            console.log(currentEnemy)
                            console.log(player)
                        }     
                    }else if (randomNum === 2) {
                        console.log ("Use your hammer and stun "  + currentEnemy.name + ".  Then attack with your sword.")
                        while(player.health > 0 && currentEnemy.health > 0 ){
                            attackEnemy(currentEnemy)
                            attackPerson(currentEnemy)
                            dropItem(currentEnemy)
                            console.log(currentEnemy)
                            console.log(player)
                        }
                    }
                }
                else if (run === true){
                    console.log("You barely escaped.") 
                }  
            }
        }
    }
    
