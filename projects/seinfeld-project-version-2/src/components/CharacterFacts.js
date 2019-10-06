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
                }} src ={char.img} alt='facts' width="400"/>
                <b>
                    <p style={{
                        fontSize: '25px'
                    }}>{char.facts}</p>
                </b>
            </>
        )
    })
    return(
        <div className= 'character-facts' style = {{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: '50px 250px'
        }}>
        <h1 style={{
            fontSize: 50,
            
        }}>Character Facts</h1>
            {mappedImgs}
        </div>
    )
}
export default withChar(CharacterFacts)