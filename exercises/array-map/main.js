// const arr =[2, 5, 100]
// const newArr = arr.map(function(num){
//     return num.toString()
// })

  
//   console.log(newArr)

//   const namesArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
//   const NewNamesArr =namesArr.map(function(name){})
  
//   console.log()
  
//   const numbers =[3,5,9,98,87]


  
  

  const peopleArr =[{
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }]
//   const newPeopleArr = peopleArr.map(function(person){ 
//      return  person.name
//   })
//   console.log(newPeopleArr)
  
  const newPeopleArr = peopleArr.map(function(person){
       if (person.age >= 18){
           console.log (person.name + ' can go to the Matrix.')
           
       }else {
           console.log(person.name + " isn't old enough to go.")
       }
  })
      
//       people.map(function(people) {
      
//           if (people.age >= 18){
//              console.log(people.name + " can go to the Matrix.") 
//           } else {
//               console.log(people.name + " is under age.")
//           }
//   } )
  
//   }
  
//   console.log(isGoing(arr))
  