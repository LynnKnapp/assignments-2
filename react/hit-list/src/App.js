import React,{Component} from 'react'
import axios from 'axios'


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
        this.state = {}
    }
//component already exists so don't need fat arrow function
    componentDidMount(){
        console.log("I'm loaded")

    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default App

