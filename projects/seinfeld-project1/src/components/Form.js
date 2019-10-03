import React from 'react'
import './styles.css'

const Form =(props)=>{
    return(
             <form className= 'form' onSubmit ={props.handleSubmit}>
                <input className = 'input'type='radio' name='userSelection' value='jerry' onChange={props.handleChange}/>Jerry Seinfeld
                <br/><br/>
                <input type='radio' name='userSelection' value='elaine'onChange={props.handleChange}/>Elaine Benes
                <br/><br/>
                <input type='radio' name='userSelection' value='george'onChange={props.handleChange}/>George Costanza
                <br/><br/>
                <input type='radio' name='userSelection' value='Kramer' onChange={props.handleChange}/>Cosmo Kramer 
                <br/><br/>
                <input type='radio' name='userSelection' value='neuman'onChange={props.handleChange}/>Neuman
                <br/><br/>
                <input type='radio' name='userSelection' value='Frank Costanza' onChange={props.handleChange} />Frank Costanza
                <button>Submit</button>
            </form>
    )
}
export default Form