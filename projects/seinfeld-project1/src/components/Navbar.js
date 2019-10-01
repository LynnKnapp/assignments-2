import React from 'react'
import Home from './Home'
import About from './About.js'
import  Characters from './Characters.js'
import FunFacts from './FunFacts'
import {Switch, Route} from 'react-router-dom'

const Navbar =()=>{
    return(
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path= '/about' component={About}/>
            <Route path= '/funFacts' component={FunFacts}/>
            <Route path='./characters' component={Characters}/>
          </Switch>
        </div>
    )
}
export default Navbar