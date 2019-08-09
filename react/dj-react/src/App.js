import React, {Component} from 'react'
import Square from './Square.js'
import './App.css'
 
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
// add event listeners like onclick goes right on the button goes in {function- this.blackOrWhite} don't put in ()because it will call it right away, only want to happen onclick
class App extends Component{
    constructor(){
     super()
     this.state = {
         boxcolor1: 'black',
         boxcolor2: 'black',
         boxcolor3: 'black',
         boxcolor4: 'black',
     }
    }
    blackOrWhite =() => {
        let newColor
        if( this.state.boxcolor1 === 'black') {
            newColor = 'white'
        }else{
            newcolor = 'black'
        }  
        this.setState({
            boxcolor1: newColor,
            boxcolor2: newColor,
            boxcolor3: newColor,
            boxcolor4: newColor
        })      
    }
    render(){
        return
          <div>
            <Box color ={this.state.boxcolor1}/>
            <Box color ={this.state.boxcolor2}/>
            <Box color ={this.state.boxcolor3}/>
            <Box color ={this.state.boxcolor4}/> 
            <button onClick ={this.blackOrWhite}>Black and White</button> 
          </div>  
    } 
    
}
 


export default App
