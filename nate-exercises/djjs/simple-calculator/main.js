let calculate = document.getElementById('calculator')

calculate.addEventListener('submit', function(e){
    e.preventDefault()
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value
    let c = Number(a) + Number(b)
    document.getElementById(sum).innerHTML = c
})
calculate.addEventListener('submit', function(e){t
    e.preventDefault()
    let d = document.getElementById('num1').value
    let e = document.getElementById('num2').value
    let f = Number(d) - Number(e)
    document.getElementById(subtraction).innerHTML = f
})
calculate.addEventListener('submit', function(e){
    e.preventDefault()
    let g = document.getElementById('num1').value
    let h = document.getElementById('num2').value
    let i = Number(g) - Number(h)
    document.getElementById(subtraction).innerHTML = i
    
})
calculate.addEventListener('submit', function(e){
    e.preventDefault()
    let j= document.getElementById('num1').value
    let k = document.getElementById('num2').value
    let l = Number(j) - Number(k)
    document.getElementById(subtraction).innerHTML = l
    
})