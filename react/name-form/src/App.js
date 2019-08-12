import React from 'react'
import NameForm from './NameForm.js' 
import Namelist from './Namelist.js'

//controlled components- a  component where state keeps everything current with any user input
// building a form
//1. <form> with inputs and a button
//2 every input needs 3 attributes (name, value , onchange)
//3. must have a handle change type method-handleChange is like adding .addeventListener in vanilla 
// must have a handleChange method that updates state on user input
//4. you must have a handle submit type method that fires on the forms submission
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            names: []

        }
    }
    //handleChange happens every time a letter is typed in, it is called in the onChange 
    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        //handle the user's data
        //need to save all the names into an empty array
    
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        //update state, save users data && clear input
        this.setState(prevState =>({
            firstName: '',
            names: [...prevState.names, newName]
        }))
    }

    render(){
        
        return(
            <div>
                <NameForm
                    handleChange ={this.handleChange}
                    handleSubmit ={this.handleSubmit}
                    firstName ={this.state.firstName}
                    lastName ={this.state.lastName}/>
                <Namelist 
                    names = {this.state.names} 

                    />
            </div>
        )
    }
}
export default App