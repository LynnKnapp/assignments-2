const coders =[{
    name: "Cesar",
    age: 37,
    religion: "the most high",
    city: "Los Angeles",
    state: "California",
    annoying: "yes",
    interests: [[ "cooking", "cleaning", "waiting on hubby", "chess"],
                [ "drinking", "gaming", "laughing"]], 
    constructorFunction: 3,                
    friends: {
           name: "Sam",
           age: 32,
           sex: "male", 
           interests: [["chess", "drinking"],
                        ["gaming", "walking like an ape"]],
            car: {
                make: 'Chevy',
                model: 'Corvette',
                color: ['cherry red', 'white', 'blue']    
            }            
    },
    sexualPreferance: "whatever presents itself",
    favoriteSaying: "The most high" 
    }, {    
    name: "Jonathon",
    age: 40,
    religion: "jewish",
    city: "Draper",
    state: "Utah",
    annoying: "no",
    interests: [["rubix cube", "edabit", "coding" ],
                [ "debugging", "more coding"]], 
    constructorFunction: 7,
    sexualPreferance: "man looking for a woman",
    favoriteSaying: "Can I help you code"                      
    
    },
    {
    name: "Sarah",
    age: 47,
    city: "Salt Lake City",
    state: "Utah",
    religion:"christian",
    annoying: "no",
    interests: ["yoga", "reading", "chess", "watching movies"],
    forLoop: "yes",
    whileLoop: "sometimes",
    sexualPreferance: "woman looking for a man",
    favoriteSaying: "Yada yada" 

    }
]  

function push(){
    return(   
        coders[0].friends.car.color.push('pink','blue')
    )    
}
push()
console.log(coders[0].friends.car.color)

console.log(coders[0].friends.interests[1][1])
console.log(coders[0].friends.car.make)
console.log(coders[0].friends.car.color[0])