import React from 'react'
import './styles.css'

const Form =(props)=>{
    return(
        <section>
            <form className= 'form' onSubmit ={props.handleSubmit}>
                    <div className='choice'>
                        <input className = 'input'type='radio' name='userSelection' value='Jerry Seinfeld' onChange={props.handleChange}/><h2>Jerry Seinfeld</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Elaine Benes'onChange={props.handleChange}/><h2>Elaine Benes</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='George Costanza'onChange={props.handleChange}/><h2>George Costanza</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Kramer' onChange={props.handleChange}/><h2>Cosmo Kramer</h2> 
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Newman'onChange={props.handleChange}/><h2>Newman</h2>
                    </div>
                    <div className='choice' >
                        <input type='radio' name='userSelection' value='Frank Costanza' onChange={props.handleChange} /><h2>Frank Costanza</h2>
                    </div>
                <button className = 'submit'>Submit</button>
                </form>
            <button className='next-question'onClick={props.newQuestion}>Next Question</button>
        </section>  
    )
}
export default Form