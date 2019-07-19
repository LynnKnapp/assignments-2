var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz "
   console.log(people[0])

function forception (people, alphabet) {
    let newAlph = alphabet.toUpperCase()

    console.log(newAlph)
    const newArr=[]
    for ( let i = 0; i < people.length; i++){
         newArr.push(people[i])
         for( let j = 0; j < newAlph.length; j++){
             newArr.push(newAlph[j])
         }
         
    }
    return newArr 
}
console.log(forception(people, alphabet))