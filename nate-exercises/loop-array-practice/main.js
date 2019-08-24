// let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (let i = 0; i <officeItems.length; i++){
//     let count = 0
//     if(officeItems[i] === 'computer') {
//         count ++
//     }
//     console.log(count)
// }

let people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
  for (let i = 0; i < people.length; i++){
    //   if(people[i].age >= 18){
    //       console.log(people[i].name + " can see Mad Max")
    //   }else if (people[i].age < 18){
    //       console.log(people[i].name + " can't see Mad Max")
    //   }
    if (people[i].age >=18 && people[i].gender === 'female'){
            console.log("She is legal to watch Mad Max.")
        }else if(people[i].age >=18 && people[i].gender === 'male'){
            console.log('He is legal to watch Mad Max.')
        }else if(people[i].age <18 && people[i].gender ==='female'){
            console.log("She isn't legal, don't let her in")
        }else if(people[i].age <18 && people[i].gender === 'male'){
            console.log("He isn't legal, don't let him in")
        }
  } 

let arr =[2,5,9,12,3] 
function toggle(){
    for(let i = 0; i < arr.length; i++ ){

    } 
} 
console.log(toggle()) 
      
  


