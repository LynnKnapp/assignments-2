let readlineSync = require("readline-sync");

console.log("Hello, welcome.")

let gameOver = false
let isAlive = true
let item = []

const george = {
    name: "George",
    hp: 150,
    attack: 20,
    weapon: ["the big shoe", "pastrami sandwich", "glamour magazine"],
    item: [],
    tagLine: "George is getting upset"
}

const elaine = {
    name: "Elaine",
    hp: 150,
    attack: 20,
    weapon: ["the big salad", "today sponge", "the 'get out 'push"],
    item: [],
    tagLine: "Yada Yada Yada, your through"
}

const jerry = {
    name: "Jerry",
    hp: 150,
    attack: 20,
    weapon: ["microphone", "cereal box", "his cadillac"],
    item: [],
    tagLine: "Serenity now, insanity later."
}
const kramer = {
    name: "Kramer",
    hp: 150,
    attack: 20,
    weapon: ["the slicer", "the bronzo cleaner", "Mr Marbles Chucky doll"],
    item: [],
    tagLine: "I'm out there and I'm lovin every minute of it"
}
let player = [george, elaine, jerry, kramer]

function jerkStore(name, hp, attack, weapon, tagLine, encounterTagLine) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.weapon = weapon;
    this.tagLine = tagLine;
    this.encounterTagLine = encounterTagLine;
}

let newman = new jerkStore("Newman", 120, 20, ["mailbag", "the rope", "mail truck"], "When you control the mail, you control information", "Hold onto your food, you encountered Newman, Hahahaha")
let soupNazi = new jerkStore("Soup Nazi", 100, 15, ["crab bisque", "chef knife", "his finger"], "no soup for you, 1 year", "You've encountered the Soup Nazi, don't get in the line.")
let frankCostanza = new jerkStore("Frank Costanza", 110, 10, ["frank's cooking", "his obscenities", "headslap"], "You want a piece of me, you want a piece of me.  You got it!!", "Oh no it's Frank Costanza.  Prepare for the feats of strength.")

const jerkStores = [newman, soupNazi, frankCostanza]
console.log(jerkStores)

let playerNames = player.map(player => player.name)
let options = readlineSync.keyInSelect(playerNames, "Which player do you choose?")
if (options === 0) {
    console.log("You've selected George")
} else if (options === 1) {
    console.log("You selected Elaine")
} else if (options === 2) {
    console.log("You've selected Jerry")
} else {
    console.log("You've selected Kramer")
}

if (ready === "yes"){ 
    while (player.health > 0) {
        const walk = readline.keyInYN ("Do you want to walk?")   
        // console.log(walk) 
        if (walk) {
            console.log("Your now walking.")
            let encounter =jerkStoreAppears() 
            
            if (encounter){
                let fight =readline.question ("Do you want to fight or run?")
                console.log (fight + "test1")

                if (fight === "fight"){
                    let currentJerkIndex = jerkStores[Math.floor(Math.random() *jerkStores.length)]
                    let currentJerk = jerkStores[currentJerkIndex]
                    let currentPersonIndex = player[Math.floor(Math.random() * 3)]
                    let currentPerson = player[currentPersonIndex]
                    // const randomNum = Math.floor(Math.random() * 3)

                    if (currentJerk === 0) {
                            console.log ("Draw your sword and attack when " + currentPerson.name + " is on its tail!") 
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

// while (isAlive && !gameOver) {
//     let question = readlineSync.keyIn("Would you like to walk? [y] to walk, [n] to end game. ", {
//         limit: 'yn'
//     })
//         if (question === "n") {
//             isAlive = false
//             console.log("You just fell into the pool and the pool guy never came to save you.  Your dead.")
            
//         }else if (question === "y") {
//             walk()
//         console.log("You are walking now.")
//         }
//         jerkStoreAppears()
//         let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {
//             limit: 'fr'})
        
//         if (chooseFight === "f") {
//                 if(player.hp >0){
//                     attackPerson()
//                 }else if (jerkStores.hp > 0)
//             if (jerkStores === newman) {
//                 console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
//             } else if (jerkStores === soupNazi) {
//                 console.log("You've encountered the Soup Nazi, don't get in the line.  Then he'll go shoot himself.")
//             } else if (jerkStores === frankCostanza) {
//                 console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
//             }
//             while (player.hp > 0) {
//                    attackJerkStore()
            
//                 if (jerkStores.hp > 0) {
//                     attackPerson()
//                 } else if (player.hp > 0 && jerkStores.hp <= 0) {
//                     item.push(currentJerk.item)
//                 }
//             }
//     } 
    

    



function walk() {
    let random = Math.floor(Math.random() * 3)
    if (random > 0) {
        console.log("You are walking now.")
    } else {
        jerkStoreAppears()
    }
}

function jerkStoreAppears() {
    let jerkStore = jerkStores[Math.floor(Math.random() * jerkStores.length)]
    console.log(`you have encountered ${jerkStore.name}`)
    console.log(`${jerkStore.encounterTagLine}`)

}

function attackJerkStore() {
    console.log("Attack Jerk Store.")
    let currentJerk = jerkStores[Math.floor(Math.random() *jerkStores.length)]

    let currentPersonIndex = Math.floor(Math.random() * 3)
    let currentPerson = player[currentPersonIndex]

    while (currentJerk.hp > 0) {
       let  randomWeapon = currentPerson.weapon[Math.floor(Math.random() * 3)]
        if (randomWeapon === currentPerson.weapon[0]) {
            console.log(`You attacked ${currentJerk.name} with ${currentPerson.weapon[0]}`)
            currentJerk.hp -= 10
            console.log(`${currentJerk.name} now has ${currentJerk.hp} hp points`)
        } else if (randomWeapon === currentPerson.weapon[1]) {
            console.log(`${currentJerk.name} attacked you with ${currentPerson.weapon[1]}`)
            currentJerk.hp -= 15
            console.log(`${currentJerk.name} now has ${currentJerk.hp} hp points`)
        } else if (randomWeapon === currentPerson.weapon[2]) {
            console.log(`${currentJerk.name} attacked you with ${currentPerson.weapon[2]}`)
            currentJerk.hp -= 25
            console.log(`${currentJerk.name} now has ${currentJerk.hp} hp points`)
        }
    }
}

function attackPerson(player) {
    let currentJerkIndex= Math.floor(Math.random() * 3)
    let currentJerk = person[currentJerkIndex]
    let currentPersonIndex = player[Math.floor(Math.random() * 3)]
    let currentPerson = player[currentPersonIndex]
    console.log("Your being attacked.")
    while (currentPerson.hp > 0) {
        let jerkWeapon = Math.floor(Math.random() * 3)
        if (jerkWeapon === weapon[0]) {
            console.log(`${currentPerson.name} attacked you with ${jerkStores.weapon[0]}`)
            player.hp -= 10
            console.log(`${currentPerson.name} now has ${currentPerson.hp} hp points`)
        } else if (jerkWeapon === weapon[1]) {
            console.log(`${jerkStores.name} attacked you with ${jerkStores.weapon[1]}`)
            jerkStore.hp -= 15
            console.log(`${currentPerson.name} now has ${currentPerson.hp} hp points`)

        } else if (jerkWeapon === [2]) {
            console.log(`${jerkStores.name} attacked you with ${jerkStores.weapon[2]}`)
            jerkStore.hp -= 25
            console.log(`${player.name} now has ${currentPerson.hp} hp points`)
        } else {
            console.log('hello')
        }
    }
}










// while (!gameOver) {
//     if (move === true) {
//         let chooseFight = readlineSync.keyInYN("Do you want to fight or run?")
//         if (chooseFight === true) {
//             attackJerkStore()
//             attackPerson()
//         }

//     } else if (move === false) {
//         gameOver === true
//         console.log("Prepare to die.")
//     }

// }
// function jerkStoreAppears() {
//     let randomNum = Math.floor(Math.random() * 3)
//     if (randomNum === 0) {
//         console.log("Hold onto your food, you encountered Newman, Hahahaha")
//     } else if (randomNum === 1) {
//         console.log("You've encountered the Soup Nazi, don't get in the line.")
//     } else if (randomNum === 2) {
//         console.log("Oh no it's Frank Costanza.  Prepare for the feats of strength.")
//     }
// }
// function fight() {
//     console.log(fight)
//     console.log("A jerk store appears")

//     let fight = readline.keyInSelect("Do you want to fight or run?")
//     let currentJerk = jerkStoreAppears()
//     let randomNum = Math.floor(Math.random() * 3)

//     if (randomNum === 0) {
//         while (player.hp > 0 && jerkStore.hp > 0) {
//             console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
//             attackJerkStore()

//             console.log("The person health is ", person.hp)
//             attackPerson()
//             console.log("The jerk store health is ", jerkStore.hp)
//             }
//         } else if (randomNum === 1) {
//             console.log("Refuse to get in the line.  He'll go into his bunker and shoot himself.")
//         } else {
//             console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
//         }
//     }