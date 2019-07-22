const readline = require('readline-sync');

const player = readline.question("What is your name?")
console.log("Hello " + player + ".")

let gameOver = false
let options =["put hand in the hole", "find the key", "open the door"]
let foundkey = false
let open =false


while(!gameOver){
    let personAnswer = readline.keyInSelect(options,"What are you going to do?")
    if (personAnswer === 0){ 
        console.log("You were supposed to have found the key first.  You just died")
        gameOver = true
    }else if (personAnswer === 2 ){
            if(foundkey === true){
                console.log("Great, you've opened the door.  Gameover ")
                gameOver = true
            }else {
                console.log("You can't open the door without a key, go back and search for it.")
            }
    }else if (personAnswer === 1){
            console.log("Good, now go and open the door.")
                foundkey = true
    }else if (personAnswer === -1){
        console.log("You can't cancel out of the game you dweeb.")
    }

}

