import React from 'react'
import QuoteList from './components/QuoteList.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Quiz from './components/Quiz.js'
import CharacterFacts from './components/CharacterFacts`'
import {Switch, Route, withRouter} from 'react-router-dom'

const App = () =>{    
        return(
            <div>
            <Navbar /> 
            <img className = 'logo-image' src={require("./components/assets/Screen Shot 2019-10-01 at 5.39.07 PM.png")} />
            <h1 className= 'title'>The Quiz About Absolutely Nothing</h1>
            <Switch> 
                <Route exact path ='/' component = {QuoteList}></Route>
                <Route path ='/characterfacts' component={CharacterFacts}></Route>
            </Switch>
             

            </div>
        )
    
}
export default withRouter(App)