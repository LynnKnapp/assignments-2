var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]


function fruitVeggies(){
    vegetables.pop()
    vegetables.shift() 
    fruit.indexOf("orange") 
    fruit.push(1) 
    vegetables.length 
    vegetables.push(3)  
    let food = fruit.concat(vegetables)
    console.log(food)
    food.splice(4, 2) 
    console.log(food) 
    food.reverse() 
    console.log(food)    
}
fruitVeggies()

    


