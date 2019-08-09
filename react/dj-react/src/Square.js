import React from 'react'

const Square = (props) => {
    const boxStyle ={
        backgroundColor: props.color
    }
    return(
        <div className = 'box' style ={boxStyle}>
            
        </div>
    )
} 


export default Square
