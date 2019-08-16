import React,{Component} from 'react'
import axios from 'axios'

class Vader extends Component {
    constructor(){
        super()
        this.state ={
            character: {}
        }
    }
    componentDidMount(){
        axios.get("https://swapi.co/api/people/2/")
            .then(res => {
                this.setState({
                    character: res.data
                
                })
            })
            .catch(err => console.log(err))
    }
    render(){
        
            
        return (
            <div className ='eachCharacter'>
                <h1>{this.state.character.name}</h1>
                <h2>{this.state.character.height}</h2>
                <h2>{this.state.character.skinColor}</h2>
            </div>
        )

    }
}    
export default Vader