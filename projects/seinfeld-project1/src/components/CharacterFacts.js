import React from 'react'
import Character from './Characters'

const CharacterFacts =(props)=>{

    return(
        <div>
           <img src ={props.img}/>
           <h2>George Costanza</h2>
           <p>{props.facts}</p>
        </div>
    )
}
export default CharacterFacts