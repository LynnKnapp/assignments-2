// const ask =require('readline-sync')

// let gameOver = false

// const player = {
//     name: "",
//     health: 100,
//     attack: function (){
//         return Math.floor(Math.random()* 10)
//     }   
// }
// console.log(player)
// function Enemy(name,type,health,weapon){
//     this.name =name;
//     this.type =type;
//     this.health =health;
//     this.weapon =weapon;
// }
// // let bossman1 =new Enemy ("Gibdo","mummy", "50","hands")
// // let bossman2 =new Enemy ("Iron Knuckle","knight", "75", "knife")
// // let bossman3 =new Enemy ("Volvagia","dragon", "100","fire")



// function generateEnemy(){
//     const randomNum = Math.floor(Math.random() * 3)
//     if(randomNum === 0){
//         return new Enemy ("Gibdo","mummy", "50","hands")
//     }else if(randomNum === 1){
//         return new Enemy ("Iron Knuckle","knight", "75", "knife")
//     }else if (randomNum === 2){
//         return new Enemy ("Volvagia","dragon", "100","fire")
        
// console.log(currentEnemy)

//     }
// }

function runlikeTheWind(){
    const randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 0){
            const currentEnemy = generateEnemy()
            // console.log(currentEnemy)
            console.log("You ran into" + currentEnemy.name) 
            battle(currentEnemy) 

        }else if (randomNum ===1){
            

        }else if (randomNum ===3){
            
        }                
}


// function fly(){
//     const randomNum = Math.floor(Math.random() * 4)
//     if (randomNum === 0)
//         // const currentEnemy =generateEnemy() 
//         generateEnemy()
//         console.log() 


// }
// const weapon =["sword", "arrow","spell"]

// function battle(){
//     if (player ){
//         console.log ("Whew, glad I escaped him!")    
//     } else if (player === fly) {
//         console.log("Woaaaaa, that was close!")
//     } else if (player ===  )
// }
// while (gameOver){
//     runlikeTheWind()
//     console.log(runlikeTheWind())
// }
