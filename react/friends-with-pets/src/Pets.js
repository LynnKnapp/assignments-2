import React from 'react'

const Pets = (props) =>{
    return (
        <div className ='lil-critters'>
            <h1 className = 'pet-name'>{Pets.name}</h1>
            <h2 className = 'pet-breed'> {Pets.breed} </h2>
        </div>
    )
}
export default Pets