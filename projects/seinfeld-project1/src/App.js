import React from 'react'
import QuoteList from './components/QuoteList.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Quiz from './components/Quiz.js'
import {Switch, Route} from 'react-router-dom'

const App = () =>{    
        return(
            <div>
              <Navbar />
              <Switch>
                    <Route exact path ='/' component ={Home}/>
                    <Route path ='/Quiz' component ={Quiz}/>
              </Switch>  
              <QuoteList /> 
            </div>
        )
    
}
export default App