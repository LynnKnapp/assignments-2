// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (i=0; i < officeItems.length; i++) {
//     count = 0 
//     if (officeItems[i] === "computer"){
//         count++ 
//     }
//     console.log(count)
// }

var peopleWhoWantToSeeMadMaxFuryRoad = [
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
  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      let  madMax = peopleWhoWantToSeeMadMaxFuryRoad
      if (madMax[i].age >= 18 && madMax[i].gender === "female") { 
          console.log(madMax[i].name + " is old enough to see Mad Max, let her go.")
      } else if (madMax[i].age < 18 && madMax[i].gender === "female"){
          console.log(madMax[i].name + " isn't old enough, don't let her go.")
      }else if (madMax[i].age >= 18 && madMax[i].gender === "male"){
          console.log(madMax[i].name + " is old enough to see Mad Max, let him go")  
      }else if (madMax[i].age < 18 && madMax[i].gender === "male"){
          console.log(madMax[i].name + " isn't old enough to see Mad Max, don't let him go")
      }
  }
  