import React from 'react'
import {Link, withRouter} from 'react-router-dom' 

const Navbar = () =>{
    return(
        <nav>
            <Link to = "/">Home</Link> 
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
        </nav>

    )
}
export default withRouter(Navbar) 