import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
import './styles.css'
import {Switch, Route, withRouter} from 'react-router-dom'

//Browser Router => teaches your about to be a SPA-(single page application)
//Switch allows to load a specific component
//Route(s) => Defines the component that should be loaded when the url changes
//Link(s) => Allows the user to change component view
//withRouter => A method to provide the react-router-dom props

//Every component loaded on a <Route/> receives 3 props from react-router-dom:
  //History ,  Location ,   Match 

//SSR(service side rendering)when making request to a server is sends a website, not JSON is built on the backend  


const App = () =>{
    return(
        <div>
            <Navbar/>
            <Switch>
            //<Route path is a prop//
            exact path 
                <Route exact path = '/' component = {Home}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/contact' component = {Services}/>
            </Switch>
            <Footer/>

        </div>
    )
}

export default withRouter(App)