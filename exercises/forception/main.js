var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception( arr, str){
     
    let combined = arr.shift() + str
    let newArr = combined
    return newArr
}
console.log(forception(people, alphabet ))