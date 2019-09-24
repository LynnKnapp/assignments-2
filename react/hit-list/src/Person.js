import React from 'react'

const Person = (props) => {
    // const {name, image, age} = props.character

    return(
        
             <div className = 'person-container'>
                <img className = 'person-image' src ={props.image}/>    
                <h2 className = 'person-heading'>{props.name}></h2>
                <p>{props.age}</p>
            </div>
           
    )
}
export default Person