import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav>
            <Link to = "/Skywalker">Luke Skywalker</Link> 
            <Link to = "/C3PO">C3PO</Link>
            <Link to = "/R2D2">R2D2</Link>
            <Link to = "/Vader">Darth Vader</Link>
        </nav>

    )
}
export default withRouter(Navbar) 