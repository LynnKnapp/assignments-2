import React from 'react'
import Characters from './Characters'

const CharacterFacts =(props)=>{
    
    return(
        <div>
        <h1>Character Facts</h1>
            <h2>{props.name}</h2>
           <img src ={props.img}/>
           <p>{props.facts}</p>
        </div>
    )
}
export default CharacterFacts