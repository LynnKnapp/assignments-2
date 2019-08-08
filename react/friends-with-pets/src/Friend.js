import React from "react"

const Friend = (props) => {
    const mappedPets = props.pets.map((pet, i) => {    
        return(
            <div>
                <p>Pet Name: {pet.name} </p> 
                <p>Pet Breed {pet.breed}</p>
            </div>
        )  
    })

    return (
        <div className="dot-friend">
            <h3 className = 'person-name'>{props.name}</h3>
            <h4 className = 'person-age'>{props.age}</h4>
            <div className = 'dot-pets'>
                <p><ul></ul></p>
                {mappedPets}
            </div>
        </div>
    )
}

export default Friend;