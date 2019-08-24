function sum(num1, num2){
    return num1 + num2
}
console.log(sum(457,986))


function largestNum(){
   return Math.max(7,98,77)
        
    }
console.log(largestNum())

function evenOrOdd(num){
    if (num % 2 === 0){
        console.log('number is even')
    }else{
        console.log('number is odd')
    }   
}
function isString(str){
    if (str <= 20){
       return str.concat(str + str)
    }else{
        return str.slice(0,14)
    }
}
console.log(isString('Georgey is getting upset.'))


