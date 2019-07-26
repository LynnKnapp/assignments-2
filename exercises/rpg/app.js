let readlineSync = require("readline-sync");

console.log("Hello, welcome.")

let gameOver = false
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
let player = [george.name, elaine.name, jerry.name, kramer.name]

function enemy(name, hp, attack, item, tagLine) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.item = item;
    this.tagLine = tagLine;
}
let newman = new enemy("Newman", 120, 20, ["mailbag", "the rope", "mail truck"], "When you control the mail, you control information")
let soupNazi = new enemy("Soup Nazi", 100, 15, ["crab bisque", "chef knife", "his finger"], "no soup for you, 1 year")
let frankCostanza = new enemy("Frank Costanza", 110, 10, ["frank's cooking", "his obscenities", "headslap"], "You want a piece of me, you want a piece of me.  You got it!!")
let jerkStore = [newman, soupNazi, frankCostanza]




let options = readlineSync.keyInSelect(player, "Which player do you choose?")
if (options === 0) {

    console.log("You've selected George")
} else if (options === 1) {

    console.log("You selected Elaine")
} else if (options === 2) {

    console.log("You've selected Jerry")
} else {

    console.log("You've selected Kramer")
}

let move = readlineSync.keyInYN("Do you want to start walking")
while (!gameOver) {
    if (move === true) {
        console.log("Start walking.")
        // jerkStoreAppears()
        walk()
        let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {
            limit: 'fr'
        })
        if (chooseFight === "f") {
            if (jerkStore === newman) {
                console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
            } else if (jerkStore === soupNazi) {
                console.log("You've encountered the Soup Nazi, don't get in the line.  Then he'll go shoot himself.")
            } else if (jerkStore === frankCostanza) {
                console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
            }
            while (player.hp > 0) {

                attackJerkStore()
                console.log(attackJerkStore)
            }
            if (jerkStore.hp > 0) {
                attackPerson()
            } else if (player.hp > 0 && jerkStore.hp <= 0) {
                item.push(currentJerk.item)
            }
        }
    } else if (move === false) {
        gameOver === true
        console.log("Your dead.")
    }

}

function jerkStoreAppears() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        console.log("Hold onto your food, you encountered Newman, Hahahaha")
    } else if (randomNum === 1) {
        console.log("You've encountered the soup Nazi")
    } else if (randomNum === 2) {
        console.log("Oh no it's Frank, prepare for the feats of strength.")
    }
}

// const walkman = readlineSync.keyInYN("Do you want to walk?")
// while (players.hp > 0) {
//     if (walkman === "y") {
//         walk()
//     } else {
//         console.log("You are walking.")
//     }

// function fight() {
//     console.log(fight)
//     console.log("A jerk store appears")

//     let fight = readline.keyInSelect("Do you want to fight or run?")
//     let currentJerk = jerkStoreAppears()
//     let randomNum = Math.floor(Math.random() * 3)

//     if (randomNum === 0) {
//         while (person.hp > 0 && jerkStore.hp > 0) {
//             console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
//             attackJerkStore()

//             console.log("The person health is ", person.hp)
//             attackPerson()
//             console.log("The jerk store health is ", jerkStore.hp)
//         }
//     } else if (randomNum === 1) {
//         console.log("Refuse to get in the line.  He'll go into his bunker and shoot himself.")
//     } else {
//         console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
//     }
// }
// // console.log(Enemy) refer to bossman1
// //                             while(player.health > 0 && currentEnemy.health > 0 ){




// dropItem(currentJerk)
// console.log(currentEnemy)
// console.log(player)
//                             }
//                     }else if (randomNum === 1) {
//                         console.log ("Use your hookshot to draw " + currentEnemy.name + " close,then attack quickly before he kicks your ass.")
//                         while(player.health > 0 && currentEnemy.health > 0 ){
//                             attackEnemy(currentEnemy)
//                             attackPerson(currentEnemy)
//                             dropItem(currentEnemy)
//                             console.log(currentEnemy)
//                             console.log(player)
//                         }     
//                     }else if (randomNum === 2) {
//                         console.log ("Use your hammer and stun "  + currentEnemy.name + ".  Then attack with your sword.")
//                         while(player.health > 0 && currentEnemy.health > 0 ){
//                             attackEnemy(currentEnemy)
//                             attackPerson(currentEnemy)
//                             dropItem(currentEnemy)
//                             console.log(currentEnemy)
//                             console.log(player)
//                         }
//                     }
//                 }
//                 else if (run === true){
//                     console.log("You barely escaped.") 
//                 }  
// }




function walk() {
    if (walking === true) {
        jerkStoreAppears()
    } else {
        console.log("Then you'll die.")
    }
}

function attackJerkStore() {
    let randomWeapon = Math.floor(Math.random() * 3)
    if (randomWeapon === weapon[0]) {
        jerkStore.hp -= 10
    } else if (randomWeapon === weapon[1]) {
        jerkStore.hp -= 15
    } else if (randomWeapon === weapon[2]) {
        jerkStore.hp -= 25
    }
}

function attackPerson() {
    let jerkWeapon = Math.floor(Math.random() * 3)
    if (jerkWeapon === weapon[0]) {
        person.hp - 10
    } else if (jerkWeapon === weapon[1]) {
        person.hp - 15
    } else if (jerkWeapon === [2]) {
        person.hp - 20
    }
}

function jerkStoreAppears() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        console.log("Hold onto your food, you encountered Newman, Hahahaha")
    } else if (randomNum === 1) {
        console.log("You've encountered the Soup Nazi, don't get in the line.")
    } else if (randomNum === 2) {
        console.log("Oh no it's Frank Costanza.  Prepare for the feats of strength.")
    }
}