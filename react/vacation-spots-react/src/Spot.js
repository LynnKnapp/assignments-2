import React from "react"

const Spot = (props) =>{
    return(
        <div className = {`spot-card ${props.timeToGo.toLowerCase()}`}>
            {props.place}
            {props.price}
            {props.timeToGo}
        </div>
    )    
}

export default Spot