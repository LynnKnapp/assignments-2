import React from'react'
import {withTheme} from '../context/ThemeProvider' 

const Main =(props) =>{
    return(
        <div className = {`main-${props.theme}`}>
        <button onClick ={props.changeTheme}>Click Me to Change Theme</button> 
        </div>
    )
}
export default withTheme(Main)