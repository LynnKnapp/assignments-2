import React,{Component} from 'react'
import axios from 'axios'

class App extends Component{
    constructor(){
        super()
        this.state={
            quotes: []
        }
    }
    componentDidMount(){
        this.getQuotes()
    }
    getQuotes = () => { axios.get('https://seinfeld-quotes.herokuapp.com/quotes')
            .then(response =>{
                console.log(response.data)// const favorites = [421,389,396,398,303,19]

                // this.setState({
                //     quotes: [] 
                // })
                
            })
            .catch(error => console.log(error))
            
    } 
    render() {  

        return(
            <div>
              
               <h1>Hello</h1>
            </div>
        )
        
         
    } 
}
export default App
