import React from 'react'

class App extends React.Component{
    constructor() {
        super()
        this.state ={
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phone: '',
        favoriteFood: [],
        tellAboutYourself: '',
        hasPets: false,
        gender: '',
        favColor: 'blue'
    }
}
    handlechange = (e) => {
        const {name, value, type, checked} = e.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()

    }
render () {
    return(
        <div>
            <main>
                <form onSubmit ={this.handleSubmit}>
                    <input type = 'text' name = 'firstName' placeholder = 'First Name' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'lastName' placeholder = 'Last Name' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'email' placeholder = 'Email' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'birthplace' placeholder = 'Birth Place' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'phone' placeholder = 'Phone' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'favoriteFood' placeholder = 'Favorite Food' onChange ={this.handlechange}/>
                    <input type = 'text' name = 'tellAboutYourself' placeholder = 'Tell Us About Yourself' onChange ={this.handlechange}/>
                    <label>
                    <input type = 'checkbox' name = 'hasPets' checked ={this.state.hasPets} onChange ={this.handlechange}/>Has Pets? <br></br>
                    </label>
                    <label>
                    <input type = 'radio' name = 'gender' value = 'female' checked = {this.state.gender === 'female'} onChange ={this.handlechange}/>Female <br></br>
                    </label>
                    <label>
                    <input type = 'radio' name = 'gender' value = 'male' checked = {this.state.gender === 'male'} onChange = {this.handlechange}/>Male <br></br>
                    </label><br></br>
                    <label>Favorite Color:</label>   
                        <select 
                            value = {this.state.favColor}
                            onChange = {this.handlechange} 
                            name = 'favColor'
                    >
                            <option value ='blue'>Blue</option>
                            <option value ='fuschia'>Fushcia</option>
                            <option value ='violet'>Violet</option> 
                            <option value ='pink'>Pink</option>
                            <option vslue ='teal'>Teal</option>
                        </select>    
                    <button>Submit</button>
                </form>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h3>Your favorite color is {this.state.favColor}</h3>
            </main>    
        </div>
    )

}
}
export default App