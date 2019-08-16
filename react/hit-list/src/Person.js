import React from 'react'

const Person = (props) => {
    // const {name, image, age} = props.character

    return(
        <div className = 'individual-person'>
            <img className = 'personImage'>{props.image}</img>
            <h2 className = 'personHeading'>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    )
}
export default Person