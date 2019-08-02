const counter = document.getElementById("btn")
const button = document.createElement("button")
// let clicks = localStorage.setItem('counter ' '++')
let clicks = 0
let result = document.createElement("h1")
result.textContent = clicks
document.body.appendChild(result)
console.log(clicks)
 counter.addEventListener("click", function(){
    clicks++
    console.log(clicks)
    result.textContent = clicks
    
    localStorage.setItem("counter", clicks)
 
})

// console.log(countClicks())
// const result = document.createElement("h1")

// function counter(){
// clicks++
// result.textContent = clicks
// document.body.appendChild(result)
// localStorage.setItem("puppies", clicks)
 
// }
// var counter = localStorage.getItem('counter') || 0;


// const display = document.getElementById("display")
// const btn = document.getElementById("btn")

// let count =0
// if(localStorage.getItem("count" !== null)){
//     count = localStorage.getItem
// }