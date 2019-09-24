import React,{Component} from 'react'
import axios from 'axios'
import Person from './Person.js'
import './styles.css'



//Mount: -is when its birthed
//Unmount: -is when it leaves the page
//Render-happens when page loads, fires constructor sets up component to render
//componentDidMount -happens as soon as the page loads
// componentDidUpdate: -is when component receives update(like when state changes) 
//then goes to shouldComponentUpdate and willComponentUpdate **we don't use these**  
//componentWillUnmount-after living document goes through cycle goes to unmount 

//ComponentDidMount- 1.do http request to get data from axios 2.set intervals for page 3.window events 
//ComponentUnmount-not everything will fall off, like intervals & window events, so unmount is for cleanup,remove both events & intervals before page shuts down


class App extends Component{
    constructor(){
        super()
        this.state = {
            characters:[]
        }
    }
//component already exists so don't need fat arrow function
    componentDidMount(){
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
               .then(response => {
                   this.setState({
                       characters: response.data
                   })
               })
               .catch(err => console.log(err))
                    
               
    }
    render(){
        console.log(this.state.characters)
        const mappedCharacters = this.state.characters.map((character,id )=>{
            return(
            
                    <Person image = {character.image}
                 key = {character.id} name ={character.name} age ={character.age}/>
                
                    
            )
        })
        return(
            <div className = 'main-div'>
                <div className = 'banner'>
                    <img src = {'https://swh-826d.kxcdn.com/wp-content/uploads/2012/05/Michael-Corleone-1.jpg'} alt=''/>
                    <h1>Don Corleone's Hitlist</h1>
                </div>
                <div className = 'character-list'>
                    {mappedCharacters}  
                </div> 
            </div>
        )
    }
}
export default App

