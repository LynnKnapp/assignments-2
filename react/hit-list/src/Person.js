import React from 'react'

const Person = (props) => {
    // const {name, image} = props.character

    return(
        <div className = 'individual person'>
            <img className = 'personImage'>{props.image}</img>
            <h2 className = 'personHeading'>{props.name}</h2>
        </div>
    )
}
export default Person