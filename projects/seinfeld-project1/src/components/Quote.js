import React from 'react'
import './styles.css'
import Answer from "./Answer"

const Quote =(props) => {

    return(
        <div key={props._id} className='quote-container'>
            <h1>{props.quote}</h1>
        </div>
    )
}
export default Quote