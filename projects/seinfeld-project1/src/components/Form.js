import React from 'react'

const Form =(props)=>{
    return(
             <form>
                <input type='radio' name='character' value='jerry' />Jerry Seinfeld
                <br/><br/>
                <input type='radio' name='character' value='elaine'/>Elaine Benes
                <br/><br/>
                <input type='radio' name='character' value='george'/>George Costanza
                <br/><br/>
                <input type='radio' name='character' value='kramer'/>Cosmo Kramer 
                <br/><br/>
                <input type='radio' name='character' value='neuman'/>Neuman
                <br/><br/>
                <input type='radio' name='character' value='frank'/>Frank Costanza
            </form>
    )
}
export default Form