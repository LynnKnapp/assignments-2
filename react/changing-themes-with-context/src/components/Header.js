import React from 'react'
import {withTheme} from '../context/ThemeProvider'

const Header =(props)=>{
    return(
        <div className ={`header-${props.theme}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
    )
}
export default withTheme(Header)