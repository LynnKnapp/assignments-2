import React from 'react'
import Home from './Home'
import  Characters from './Characters.js'
import FunFacts from './FunFacts'
import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
      <div className = 'navbar'>
        <Link to ="/">Home</Link>
        <Link to = "/characters">Characters</Link>
        <Link to ="/funFact">Fun Facts</Link>      
      </div>
    )
}
export default Navbar