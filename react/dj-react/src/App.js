import React from 'react'
import Square from './Square.js'
import './styles.css'
 
//Functional Components (stateless, display)
//class components(stateful)
     //state
     //lifecycle methods

//have to import the component can do React.Component or import React,{Component} from 'react
//first thing that goes inside a class in a constrructor()
// constructor needs to be told to go look at component in order to set up it's configuration
//so super() is called everything single time to make sure component(App here) is set up correctly, super() look at component in react to make sure its set up correctly
//super() looks at react component and inherits a bunch of features, render() gets functionality from component
//in a contructor we declare something called this .state and always set equal to an object ** state is the current state but is subject to change, can't change the vaiable but cN CHANGE THE contents 
// setState is a method
// add event listeners like onclick goes right on the button goes in {function- this.blackOrWhite} don't put in ()because it will call it right away, only want to happen onclick, so onclick event listener is declared right on the button

class App extends React.Component{
   render(){
       const squares = ['purple', 'pink', 'blue', 'red']
       const mappedSquares = squares.map((square, i) => {
           return <Square color = {square}/>
       })
       return(
           <div className = "app-container">
               { mappedSquares }
           </div>
       )
   }
}
export default App