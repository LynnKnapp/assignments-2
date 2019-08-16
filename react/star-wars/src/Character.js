import React from 'react'

const Character = (props)=>{
    console.log(props)
    return(
        <>
            <h1>{props.name}</h1>
            <h2>{props.height}</h2>
            <h2>{props.skinColor}</h2>
        </>
    )
} 
export default Character