// const arr=[1,2,3]
// const newArr = arr.reduce(function(total,num) {
        
//         console.log(total)
//         return total += num
// }, 0)
//  console.log(newArr)

//  const arr =[1,2,3]
//  const strArr = arr.reduce(function(total,num){
//     //   console.log(total)
//       return total.toString() + num.toString() 
//  },)
    
 
 
//  console.log(strArr)

 const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const ageGroups = voters.reduce(function(total,person){
    let young = person.age >= 18 && person.age <= 25 
    let midAge = person.age >= 26 && person.age <= 35
    let mature = person.age > 36 && person.age <= 55
          if (person.age >= 18 && person.age <= 25 ) {
              return total +1
          }else if (person.age >= 26 && person.age <= 35){
              return total + 1
          }else if (person.age > 36 && person.age <= 55){
              return total + 1
          }
          console.log(young,midAge,mature)

})


// const trueVoters = voters.reduce(function(total,person) {
//             if(person.voted === true){
//                 return total + 1
//             }else{
//                 return total 
//             }
//         },0)                
// console.log(trueVoters)

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const realList = wishlist.reduce(function(total, item){
    
//     return total += item.price
// },0)
// console.log(realList)

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

//  const newArray = []
// function flatten(arr){
// return  arrays.concat(arrays[0], arrays[1],arrays[2])
// }
// console.log(flatten())


