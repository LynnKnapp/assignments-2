const header = document.getElementById("header") 
const h1 = document.createElement("h1")
h1.innerText = "Worlds are colliding"
header.appendChild(h1)


const h2 =document.createElement("h2")
const span =document.createElement("span")
span.innerText ="Lynn "
span.className ="myName"
h2.textContent ="wrote this in Javascript"
header.appendChild(h2)
h2.prepend(span)

const message = document.getElementsByClassName("message")[0]
console.log(message)
message.textContent = "Don't you know your killing independent George, stop hanging around Susan.  Don't you have your own friends."
// const messages =document.getElementById("messages")

const answer =document.getElementsByClassName("message")[1]
answer.textContent = "But I like her"

const nextReply =document.getElementsByClassName("message")[2]
nextReply.textContent = "But you opened the vault and too many people know the combination."

const lastWord =document.getElementsByClassName("message")[3]
lastWord.textContent ="Well I'm not breaking up with her."

console.log(nextReply)


const containerElement = document.getElementsByClassName("messages")[0]
document.getElementById("submit").addEventListener('click',function(){
    const line1= document.createElement("div") 
    line1.className = 'message'
    line1.textContent = document.messageForm.myMessage.value
    containerElement.appendChild(line1)
    
})






