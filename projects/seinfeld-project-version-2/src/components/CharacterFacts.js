import React from 'react'
import {withChar} from './ContextCharacters'

const CharacterFacts =(props)=>{
    console.log("CharacterFacts Props",props);
    const mappedImgs = props.characters.map(char=>{
        return(
            <>
                <h2>{char.name}</h2>
                <img style={{
                    border: "10px solid black"
                }} src ={char.img} alt='facts' width="300"/>
                <b>
                    <p>{char.facts}</p>
                </b>
            </>
        )
    })
    return(
        <div  style = {{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: 200
        }}>
        <h1>Character Facts</h1>
            {mappedImgs}
        </div>
    )
}
export default withChar(CharacterFacts)