

const readline = require('readline-sync')

let isAlive = true;
let hasWon = false;


function Enemy (name, hp, attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

let terminator = new Enemy('Terminator', 50, 10)
let robocop = new Enemy('Robocop', 75, 5000)
let cyborg = new Enemy('Cyborg', 1, 10000)

const enemies = [terminator, robocop, cyborg]


function Person (name, hp = 100){
    this.name = name;
    this.hp = hp;
    this.attack = 30;
}

let name = readline.question('What is your name? ')

const player1 = new Person(name)

console.log(`welcome to the game ${name}`)

while(isAlive && !hasWon){
    let question = readline.keyIn('Would you like to walk? [y] to walk, [n] to end game ', {limit: 'yn'})

    if(question === 'y'){
       walk()
    }else if (question === 'n'){
        isAlive = false
    }

}


function walk (){
    let random = Math.floor(Math.random()*3)
    if(random > 0){
        console.log('You just walked')
    }else {
        encounter()
    }
}

function encounter(){
    let enemy = enemies[Math.floor(Math.random()*enemies.length)]
    console.log(`You have encountered ${enemy.name}`)
    let action = readline.keyIn('Would you like to run [r], or attack [a]? ', {limit: 'ra'})
    if(action === 'r'){
        console.log('you ran away')
    }else {
        attack(enemy)
    }
}

function attack (enemy){
    while(player1.hp > 0 && enemy.hp > 0){
        let enemyAttack = generateAttack(enemy)
        let heroAttack = generateAttack(player1)
        player1.hp -= enemyAttack;
        console.log(`${enemy.name} attacked you!, your hp is now ${player1.hp}`);
        enemy.hp -= heroAttack;
        console.log(`You hit ${enemy.name}! ${enemy.name} now has an hp of ${enemy.hp}`);
    }
    if(player1.hp <= 0){
        console.log('Game over, you dead')
        isAlive = false;
    }else {
        console.log(`You killed ${enemy.name}`)
        enemies.splice(enemies.indexOf(enemy), 1)
        if(enemies.length === 0){
            console.log('You won the game')
            hasWon = true
        }
    }
}

function generateAttack (player){
    return Math.floor(Math.random() * player.attack)
}
