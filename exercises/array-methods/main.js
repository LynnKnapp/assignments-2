var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function removeLast(veg, fru) {
    return vegetables.pop() + 
    fruit.shift() + 
    fruit.indexOf("orange") + 
    fruit.push(1) + 
    vegetables.length +
    vegetables.push (3) 

}
console.log(removeLast())

function concat(){
    let food = fruit.concat(vegetables)
      food.splice(4,2)
      food.reverse()
      return food

     
}
console.log(concat())