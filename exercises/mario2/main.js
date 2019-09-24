const form = document.getElementById('form')


form.spinyCoins.addEventListener('change', function(event){
        event.preventDefault()
        let audio = new Audio('/Mario.coin.sound.mp3');
        audio.play();
})

form.goombaCoins.addEventListener('change', function(event){
    event.preventDefault()
    let audio = new Audio('Mario-coin-sound.mp3');
    audio.play();
})

form.bowserCoins.addEventListener('change', function(event){
    event.preventDefault()
    let audio = new Audio('./Mario.coin.sound.mp3');
    audio.play();
})



form.addEventListener("submit", function(event){
    event.preventDefault() 
    let audio = new Audio('./Mario-coin-sound.mp3');
    audio.play();
    var goomba = Number(document.form.goombaCoins.value) * 5
    console.log (goomba)

    var bowser =Number(document.form.bowserCoins.value) * 7
    console.log (bowser)

    var spiny =Number(document.form.spinyCoins.value) * 11
    console.log (spiny)

    var num1 =(goomba)
    var num2 =(bowser)
    var num3 =(spiny)

    let addedTotal = num1 + num2 + num3

    var total = document.getElementById("total")
    total.innerText = addedTotal

    totalBox.appendChild(total)

})
