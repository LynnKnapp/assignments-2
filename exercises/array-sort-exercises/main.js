
// let array=[1, 3, 5, 2, 90, 20]

//    let newArr =
//      array.sort(function(a,b){
//         return a-b
//     })
     
//   console.log(newArr)

//   let arr =[1, 3, 5, 2, 90, 20]
//   let newArr = arr.sort(function(a,b){
//       return b-a
//   })
  
//   console.log(newArr)

//   let array =["dog", "wolf", "by", "family", "eaten"]
//   let newArr =array.sort(function(a,b){
//       return a.length - b.length
//   })
//   console.log(newArr)

// let array = ["dog", "wolf", "by", "family", "eaten"]

// function alphabetical(arr) {
// return   arr.sort((a,b) => {
//     return a > b
// })
 
// }


// console.log(alphabetical(array))

function byAge(arr){
    return arr.sort((a,b) => {
        return a.age > b.age
    })
  }
  
  console.log(byAge([
      {
          name: "Quiet Samurai",
          age: 22
      },
      {
          name: "Arrogant Ambassador",
          age: 100
      },
      {
          name: "Misunderstood Observer",
          age: 2
      },
      {
          name: "Unlucky Swami",
          age: 77
      }
  ]));

