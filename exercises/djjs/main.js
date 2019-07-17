let colorChange = document.getElementById("prettyColors")

colorChange.addEventListener("mouseover", function(){    
    colorChange.style.backgroundColor = "blue"
})
colorChange.addEventListener("mousedown",function(){
    colorChange.style.backgroundColor = "red"
})
colorChange.addEventListener("mouseup", function(){
    colorChange.style.backgroundColor = "yellow"
})
colorChange.addEventListener("dblclick",function(){
    colorChange.style.backgroundColor = "green"
})
window.addEventListener("scroll", function(){
    document.getElementById("prettyColors").style.backgroundColor = "orange"
})

