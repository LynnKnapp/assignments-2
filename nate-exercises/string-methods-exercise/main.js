// let lowerCase ='go where no man has gone before'

// function allCaps(){
//    return lowerCase.toUpperCase() 
// }
// console.log(allCaps())

// let string = 'George is getting upset'
// function middleIndex(){
   
//         let halfLength = string.length / 2
//         let total = Math.floor(halfLength)
//       return  console.log(total)
// }
// middleIndex()


// function slice(str){
//    return str.slice(0, str.length/2)
   
// }

// console.log(slice('Worlds are colliding'))

// function lowerUpperCase(str){
//    let lower = str.toLowerCase()
//    let upperHalf= lower.slice(0,lower.length /2 ) 
//    return    upperHalf.toUpperCase() + lower.slice(lower.length /2, lower.length)
        
           
    
// }
// console.log(lowerUpperCase('Hello, welcome to Movie Phone'))



function allCaps(str){
    
    let arr = str.split(' ') 
    let hoochiArr = arr[0].split('')
    let mammaArr = arr[1].split('')
    console.log( mammaArr)

    return hoochiArr[0].toUpperCase() + arr[0].slice(1) + ' ' +mammaArr[0].toUpperCase() + arr[1].slice(1)
}
console.log(allCaps("hoochi mamaaaa!"))
