// function collectAnimals(animals, ...args) {  
//     console.log(animals)
//     console.log(args)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return { fruit, sweets , vegetables}
// }
// console.log(combineFruit(["apple", "pear"],
// ["cake", "pie"],
// ["carrot"]))

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  const {location, duration} = vacation
  
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  function returnFirst(items){
    firstItem = items[0];
    return firstItem
}

 favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    return `My top three favorite activities are,  ${firstFav} ", " ${secondFav}   and   ${thirdFav}`
}

returnFavorites(favoriteActivities)