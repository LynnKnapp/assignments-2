import React from 'react'
import './App.css'
import FriendList from './FriendList' 
import Friend from './Friend'
import Pets from './Pets'

const App = (props) => {
    console.log(props)
    return( <div>
                <h1 className = 'title'> 
                    Friends With Pets</h1>
                <div className = 'div-container'>    
                    <FriendList/>    
                </div>

          </div>
    )      
}
export default App