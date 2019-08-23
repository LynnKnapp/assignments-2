import React from 'react'

const VacationSpot = (props) =>{

    return (
        <div className = 'destination'>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <h2>My favorite time to go is {props.timeToGo}</h2>
        </div>
    )
}
export default VacationSpot