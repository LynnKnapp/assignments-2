import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App =()=>{
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/facts' component={()=> {
                    return(
                        <div>
                            Facts
                        </div>
                    )
            }}/>
            </Switch>
        </div>
    )
}
export default App