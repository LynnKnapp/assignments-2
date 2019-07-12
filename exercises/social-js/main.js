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
                        ["gaming", "walking like an ape"]]
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
    interests: [["rubix cube", "skiing", "eating" ],
                [ "swimming", "coding"]], 
    constructorFunction: 7,
    sexualPreferance: "man looking for a woman",
    favoriteSaying: "Hoochi mama"                      
    
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
    favoriteSaying: "I've yada yada'd before" 

    }
]  

console.log(coders[0].friends.interests[1][1])