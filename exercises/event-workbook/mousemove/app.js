let mouseOver = document.getElementById("red-box")

mouseOver.addEventListener("mouseover", function(e){
    let cursorX = e.clientX;
    let cursorY =e.clientY;
    let coordinates = "x:" + cursorX+ ", y: "+ cursorY
    console.log(coordinates)
    document.getElementById("red-box").innerHTML = coordinates
})