import React from 'react'
import Characters from './Characters.js'

const Answer =(props) =>{
    
      return(
        <div key={props._id} className='quote-container'>
             <h2>{props.author}</h2>
            <Characters answer={props.answer} imgUrl={props.imgUrl}/>
            
        </div>
            
    )
  
}
export default Answer