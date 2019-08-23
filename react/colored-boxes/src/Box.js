import React from "react"


const Box = (props) =>{
    console.log(props)
    return(

        <div className = {`${props.boxClass}`}>
            <h1>{props.name}</h1>
        </div> 
    
    )    
}
export default Box 



