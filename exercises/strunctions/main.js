function lastIndex(str){
    return str.lastIndexOf("Serenity",)
}
console.log(lastIndex("Serenity now is great, Serenity later "))

function replace(str){
    return str.replace(/Serenity/, "insanity")
}
console.log(replace("Serenity now is great, Serenity later "))

function match(str){
    return str.match(/a/g)
}
console.log(match("You want a packet"))