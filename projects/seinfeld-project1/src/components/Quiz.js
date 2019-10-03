import React from 'react'
import Quote from './Quote.js'
import Answer from './Answer.js'
import Form from './Form.js'

//if(quotesArr ===0 && props.author === 'Frank'){

//}//

// Form Needs handleChange, handleSubmit, and userSelection from QuoteList
// 1. evaluate your expression
// 2. ? or &&
// 3. what code is run if exp is true
// 4. colon :
// 5. what code is run if exp is false
// exp ? run if true : run if false
// exp && run if true
// userchoice ? <Img /> : <Message />

const Quiz = (props)=>{

    console.log(props)
    return(
        <div>
           <Quote {...props}/>
           <Form userSelection={props.userSelection} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
           <Answer answer={props.answer} />          
        </div>
    )
}
export default Quiz