const home = document.getElementById("container")

window.addEventListener("load",function(event){
    event.preventDefault()
    let audio = new Audio('./angelWing.mp3')
    audio.play()

})
// let audio = audio.play('./angelWing.mp3')
// window.addEventListener("load",function(event){
//         // let audio = audio.play('./angelWing.mp3')
//             if (audio !== undefined) {
//             audio.then(_ => {
//                 // Automatic playback started!
//                 // Show playing UI.
//             })
//             .catch(error => {
//                 // Auto-play was prevented
//                 // Show paused UI.
//             });
//             }
            
//     })