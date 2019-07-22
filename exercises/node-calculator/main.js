const readlineSync = require('readline-sync');


const num1 = Number(readlineSync.question("Hello, please enter your first number."))
const num2 =Number(readlineSync.question("Now enter your second number."))

const operation = [ "addition", "multiplication", "subtraction", "division"] 
const choice = readlineSync.keyInSelect(operation, 'Which operation do you want to use?');
console.log(num1 + num2 + choice)

if (readlineSync.keyInSelect === 0){
    addition
} else if (readlineSync.keyInSelect === 1){
    multiplication
}else if (readlineSync.keyInSelect === 2){
    subtraction
}else if(readlineSync.keyInSelect === 3){
    division
}


const addition =(num1,num2) =>{
   return num1 + num2
}
console.log(addition(num1,num2))


const multiplication =(num1,num2) =>{
   return  num1 * num2
}
console.log(multiplication(num1,num2))


const subtraction =(num1,num2) =>{
    return num1 - num2
}
console.log(subtraction(num1,num2))


const division =(num1,num2) =>{
    return num1 /num2

}
console.log(division(num1,num2))