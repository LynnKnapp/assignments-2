import React from 'react'
import QuoteList from './components/QuoteList.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Quiz from './components/Quiz.js'
import {Switch, Route, withRouter} from 'react-router-dom'

const App = () =>{    
        return(
            <div>
            <Navbar /> 
            <Switch> 
                <Route exact path ='/' component = {QuoteList}></Route>
             
            </Switch>
              <img src='/components/assets/logo.png'/>    
             

            </div>
        )
    
}
export default withRouter(App)