import React from 'react'
import './styles.css'
import Answer from "./Answer"

const Quote =(props) => {

    return(
        <div key={props._id} className='quote-container'>
            <h1>{props.quote}</h1>
            <Answer answer={props.answer}/>
        </div>
    )
}
export default Quote