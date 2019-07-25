const readline =require("readline-sync")
console.log("Hello, welcome.")

let gameOver=false
let hasWon= true

function Player(name, hp, attack, item =[], tagLine){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.item = item;
    this.tagLine = tagLine;
}
let george = new Player("George",150, 20, [], "George is getting upset")
let elaine = new Player("Elaine",150,20,[],"Your through " + randomEnemy + " .  No soup for you 1 year")
let jerry = new Player("Jerry", 150, 20, [],"Serenity now, insanity later." )
let kramer = new Player("Kramer", 150, 20, [], "I'm out there " + randomEnemy + "and I'm lovin every minute of it")
const players =[george, elaine, jerry, kramer]

 
 let options =readline.keyInSelect(players,"Which player do you choose?") 
     if(options === 0){
    console.log("You've selected "  + george )    
     } else if (options === 1){
        console.log("You selected " + elaine)    
     }else if (options === 2){
        console.log("You've selected " + jerry) 
     }else {
        console.log("You've selected " + kramer)
     }
     console.log(options)
     



console.log("Welcome, " + options  +".") 
const weapon = ["sword", "hookshot","hammer"] 

function Enemy(name,type,health,weapon, item){
    this.name =name;
    this.type =type;
    this.health =health;
    this.weapon =weapon; 
    this.item =item;
}

const ready = readline.question("Do you have the guts to play the game " + player + "?  Yes or no?")

if (ready === "yes"){ 
    while (player.health > 0) {
        const walk = readline.keyInYN ("Walk")   
        // console.log(walk) 
        if (walk) {
            console.log("Your now walking.")
            const isEnemy =enemyAppears() 
            
            if (isEnemy){
                let fight =readline.keyInYN("Do you want to fight or run?")
                console.log (fight + "test1")

                if (fight === true){
                    const currentEnemy = randomEnemy()
                    const randomNum = Math.floor(Math.random() * 3)

                    if (randomNum === 0) {
                            console.log ("Draw your sword and attack when " + currentEnemy.name + " is on its tail!") 
                            console.log(player)
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
}        
console.log("Your worm food now you dirtbag, I will rule forever!  Bahahaha!")

function randomEnemy(){
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy ("Wolfos", "wolf", 50, "claws", "iron glove")
    }else if(randomNum === 1){
        return new Enemy ("Iron Knuckle","knight", 75, "knife", "spear")
    }else if (randomNum === 2){
        return new Enemy ("Volvagia","dragon", 100, "fire","magic power")    
    }     
}

function attackEnemy(boss){
    if (weapon[0] ){
        boss.health -= 10    
    } else if (weapon[1]) {
        boss.health -= 15
    } else if (weapon[2]){
        boss.health -= 25
    }
}

function attackPerson(boss){
    if (boss.weapon){
        player.health -=Math.floor(Math.random() * (20 - 10) + 10)
    } 
}

function enemyAppears(){
    const randomNum = Math.floor(Math.random() * 3)            
    if (randomNum === 0) {
        return true;
    }
}

function run(){
    const randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
        const currentEnemy = generateEnemy()
        // console.log(currentEnemy)
        console.log("You ran into" + currentEnemy.name) 
        battle(currentEnemy)
    }
}


function personDie (){
    if (person.health <= 0) {  
       gameOver 
    }
}

function dropItem(object){
    if (object.health <= 0) {
        player.itemArr.push(object.item)
    }

}

    










// REDUCE PLAYERS HEALTH

// player.health = player.health- 10 
// console.log(player.health )


// }




