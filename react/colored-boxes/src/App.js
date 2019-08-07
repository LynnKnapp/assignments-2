import React from "react"
import Box from "./Box"
import "./App.css"


const App =(props)=>{
    console.log(props)
    return(
        <div className= "boxContainer">
            <Box boxClass = "box1" name = "Elaine"/>
            <Box boxClass = "box2" name = "George"/>
            <Box boxClass = "box3" name = "Kramer"/>
            <Box boxClass = "box4" name = "Jerry"/>
            <Box boxClass = "box5" name = "Frank"/>
            <Box boxClass = "box6" name = "Estelle"/>
            <Box boxClass = "box7" name = "Bob Sacameno"/>
            <Box boxClass = "box8" name = "Soup Nazi"/>
        </div>
    )
}

export default App