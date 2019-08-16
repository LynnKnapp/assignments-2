import React, {Component} from 'react'


class CharacterList extends React.Component{
    constructor(){
        super()
        this.state ={
            list =[]
        }
    }
    render(){
        const mappedCharacters = this.state.characters.map((character) =>{
            return(

                <div className = 'individual'>
                    <Character name={character.name} height={character.height} skinColor={character.skin_color}/>
                </div>
            )
        })
}
export default CharacterList