import React from 'react'
import Person from './Person.js'

const Namelist = (props) =>{
    const {names} = props
    const mappedNames = names.map((Person, i) => 
                                  <Person 
                                  key ={i} 
                                  firstName ={Person.firstName}
                                  lastName = {Person.lastName} />)
        
        
        return(
            <div>
                 {mappedNames} 
            </div>
        )
}

export default Namelist