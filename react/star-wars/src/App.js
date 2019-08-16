import React, {Component} from 'react'
import axios from 'axios';
import Character from './Character';
import Navbar from './Navbar'
import Skywalker from './Skywalker'
import C3PO from './C3PO'
import R2D2 from './R2D2'
import Vader from './Vader'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
    constructor(){
        super()
        this.state ={
            characters:[]
        }    
        
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people')
        .then(response => {
            this.setState({
                characters: response.data.results,
                SidebarOpen: true
            })
            console.log(response.data.results)
            })
    }
    render(){
        const mappedCharacters = this.state.characters.map((character) =>{
            return(

                <div className = 'individual'>
                    <Character name={character.name} height={character.height} skinColor={character.skin_color}/>
                </div>
            )
        })
        return(
            <div>
            <Navbar/>
                <Switch>
                    <Route path = '/Skywalker' component = {Skywalker}/>
                    <Route path = '/C3P0' component = {C3PO}/>
                    <Route path = '/R2D2' component = {R2D2}/>
                    <Route path = '/Vader' component ={Vader}/>
                </Switch>
                {mappedCharacters} 
                {/* <Skywalker/>
                <C3PO/>
                <R2D2/>
                <Vader/> */}
        </div>
            
        
        )
    } 
            
}    

export default App