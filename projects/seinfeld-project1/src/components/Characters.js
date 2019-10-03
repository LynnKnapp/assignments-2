import React from 'react'

 const Characters =(props)=>{
    const charArr = [ {
        name: 'George',
        img: require('./assets/Screen Shot 2019-09-30 at 3.18.31 PM.png')
    },{
        name: 'Jerry',
        img: require('./assets/puffy-1024x640.jpg')
    },{
    
        name:'Elaine',
        img: require('./assets/Screen Shot 2019-09-30 at 3.32.15 PM.png')
    },{    
        name:'Kramer',
        img: require('./assets/Screen Shot 2019-09-30 at 3.26.31 PM.png')
    },{   
        name: 'Frank',
        img: require('./assets/Screen Shot 2019-09-30 at 3.14.42 PM.png')
    },{   
        name: 'Newman',
        img: require('./assets/Screen Shot 2019-09-30 at 3.35.22 PM.png')
    }
    ]   
    
    const character = props.answer ? charArr.find((character)=>{
        return character.name === props.answer.split(" ")[0]
    }) : {name: "loading", img: "loading"}
    
    return(
        <div className = 'characters-container'>
            {props.answerChoice ? 
                <div>  
                    <h1>{character.name}</h1>
                    <img src={character.img} height= '500px' width='500px'/> 
                </div>
            :
            <div>
            <h1>Your wrong, try again.</h1>     
            </div>
            }
        </div>
    )
}
    
    export default Characters
    
