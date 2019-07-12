// function capUpperLower(str){
//     let upper = str.toUpperCase()
//     let lower = str.toLowerCase()
//         return upper +" "+ lower
    

    

// }
// console.log(capUpperLower("Hello Jerry"))

// function findMiddleIndex(str){
//     let arr = str.length /2 
//     let total =Math.floor(arr)
//     console.log(total)
//     return

    
// } 
// console.log(findMiddleIndex("I'm out there Jerry and I'm lovin every minute of it."))

// function slicer(str){
//     return str.slice(0, str.length/2)
// }
// console.log(slicer("Worlds are colliding."))

// function capLow(str){
//     return str.slice(0, str.length/2).toUpperCase() + str.slice(str.length/2,).toLowerCase()
    // let lower = str.toLowerCase()
    // let half = lower.slice(0,str.length/2)
    // let cap = half.toUpperCase()
    
    // if(str.length % 2 === 0){
    //     return cap
    // }else {
    //     return cap + lower
    // } 

    
// }
// console.log(capLow("You want a piece of me, you got it!"))

function caps(str){
    
    let arr = str.split(' ') 
    let hoochiArr = arr[0].split('')
    let mammaArr = arr[1].split('')

    return hoochiArr[0].toUpperCase() + arr[0].slice(1) + ' ' +mammaArr[0].toUpperCase() + arr[1].slice(1)
}
console.log(caps("hoochi mamaaaa!"))

// let splitStr = str.split(' ')
//    let result = ''
//    for(i = 0; i < splitStr.length; i++) {
//         result += splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1) + ' '
//    } return result
// }
// console.log(firstLettersCap("Jumanji is the best movie ever!"))