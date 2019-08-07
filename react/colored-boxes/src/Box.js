import React from "react"
// import './App.css'

const Box = (props) =>{
    console.log(props)
    return(

        <div className = {`${props.boxClass}`}>
            <h1>{props.name}</h1>
        </div> 
    
    )    
}
export default Box 

