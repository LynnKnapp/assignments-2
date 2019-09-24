const readline = require('readline-sync');


const num1 = Number(readline.question("Hello, please enter your first number. "))
console.log(num1)
const num2 = Number(readline.question("Now enter your second number. "))
console.log(num2)

const operation = [ "addition", "multiplication", "subtraction", "division"] 

const choice = readline.keyInSelect(operation, 'Which operation do you want to use? ');

function math(){
    if(choice === 0){
        addition(num1, num2)
    }else if(choice === 1){
        multiplication(num1, num2)
    }else if (choice === 2){
        subtraction(num1, num2)
    }else {
        division(num1, num2)
    }    
}
math()

function addition(num1,num2){
    let add = Number(num1 + num2)
    console.log(add)
}
function multiplication(num1, num2){
    let multiply = num1 * num2
    console.log(multiply)
} 
function subtraction(num1, num2){
    let subtract = num1 - num2
    console.log(subtract)
}
function division(num1, num2){
    let divide = num1 / num2
    console.log(divide)
}





