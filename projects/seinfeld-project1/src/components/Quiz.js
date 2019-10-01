import React from 'react'
import Quote from './Quote.js'
import Answer from './Answer.js'
import Form from './Form.js'
import Characters from './Characters.js'

//if(quotesArr ===0 && props.author === 'Frank'){

//}//


const Quiz =(props)=>{
    return(
        <div>
           <Quote {...props}/>
           <Answer {...props}/>
           <Form {...props}/>          
        </div>
    )
}
export default Quiz