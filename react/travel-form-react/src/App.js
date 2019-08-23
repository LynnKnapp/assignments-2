import React from 'react'


class App extends React.Component{
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            destination: [],
            dietRestrictions: [] 
        }
    }
    handleChange(e){
        const {name, value, type, checked, } = e.target
        this.setState({
            [e.target.value]: e.target.value
            
            
        })
    }
    

    render(){
        return(
            <div>
                <main>
                    <form>
                            <input 
                            name = 'First Name' 
                            value ={this.setState.firstName} 
                            onChange ={this.handleChange} 
                            placeholder = 'First Name'/> 
                            <br/>
                            <input 
                            name = 'Last Name' 
                            value ={this.setState.lastName} 
                            onChange ={this.handleChange} 
                            placeholder = 'Last Name'/>
                            <br/>
                            <input name = 'age' 
                            value ={this.setState.age} 
                            onChange ={this.handleChange} 
                            placeholder = 'Age'/>
                            <br/>
                            <label>
                               <input 
                                    type = 'radio'
                                    name = 'gender'
                                    value = 'female'
                                    checked = {this.state.gender === 'female'}
                                    onChange = {this.handleChange}/> Female      
                               <input 
                                    type = 'radio'
                                    name = 'gender'
                                    value = 'male'
                                    checked = {this.state.gender === 'male'}
                                    onChange = {this.handleChange}/> Male 
                            </label>
                        <button>Submit</button>
                    </form>
                    <hr/>
                    <h2>Entered Information</h2>
                    <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your Age: {this.state.age}</p>
                    <p>Your Gender: {this.state.gender}</p>
                    <p>Your Destination(}</p>
                    <p>
                        Your Dietary Restrictions:
                        {}
                    </p>

                </main>    
            </div> 
        )
    }
} 
export default App