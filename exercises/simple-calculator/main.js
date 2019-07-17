let calculate = document.getElementById("math") 

calculate.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("test")
    let a = document.getElementById("add1").value;
    let b = document.getElementById("add2").value;
    let c = Number(a) + Number(b)
    document.getElementById("addResult").innerHTML = c;
   
    
}) 
 calculate.addEventListener("submit", function(event){
     event.preventDefault()
     let d =document.getElementById("sub1").value;
     let e =document.getElementById("sub2").value;
     let f = Number(d)- Number(e)
     document.getElementById("subResult").innerHTML = f;
 })
 calculate.addEventListener("submit", function(event){
     event.preventDefault()
     let g =document.getElementById("mult1").value;
     let h =document.getElementById("mult2").value;
     let i = Number(g) * Number(h)
     document.getElementById("multResult").innerHTML = i   
 })
