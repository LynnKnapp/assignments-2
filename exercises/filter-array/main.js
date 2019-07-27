// const arr =[3, 6, 8, 2]

// const newArr =arr.filter(function(num){
//         if (num > 5){
//             return num
//         }
// })


// console.log(newArr)

// const arr =[3, 6, 8, 2]
// const newArr = arr.filter(function(num){
//     if (num % 2 === 0){
//         return num
//     }
// })

//   console.log(newArr)
// const animals =["dog", "wolf", "by", "family", "eaten", "camping"]
// const newAnimals = animals.filter(function(animal){
//             if(animal.length > 5) {
//                 return animal
//             }
// })

//   console.log(newAnimals)

const objectArr=[
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
    ]
    const dontBelong = objectArr.filter(function(person){
        if (person.member !== true)
        return person
    }) 
    console.log(dontBelong)