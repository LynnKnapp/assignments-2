// let argument ="hfdjsakhfuahjdks"
// let newArr = []

// function myFunction(parameter){
//     let arr = parameter.split('')
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(myFunction(argument))

// let string = "hjdsakfhjahfjehjdkshj"
// let character = "a"

// function myFunction(str,char){ 
//     for(let i = 0; i < str.length; i++){
//         let result = str[i]
//         // console.log(result)
//             if (result === char){
//                 console.log( "true")
//             }else {
//                 console.log("character not found")
//             }
//     }
// }
// console.log(myFunction(string, character))

const arr =[228,87,76,54,78,909,768,45,676,98]
let smallest = arr[0]
function tenNum(){
    for (let i = 0; i < arr.length; i++){
        if  (arr[i] < smallest){
            smallest = arr[i];
        }

    }
    return smallest
}
console.log(tenNum())

// let numArray = [5, 12, 3, 45, 1, 67]
//     var smallest = numArray[0];

// function minArray(numArray){
//     for(var i=1; i<numArray.length; i++){
//         if(numArray[i] < smallest){
//             smallest = numArray[i];
//         }
//     }
//     console.log('smallest number in array is: ' + smallest)
//  }
//  minArray(numArray)