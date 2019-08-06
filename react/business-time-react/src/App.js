import React from 'react'
import "./App.css"
import Header from './components/Header'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Products from './components/Products'
import Images from './components/Images'
import Footer from './components/Footer'

const App =()=>{
    return (
    <div>
           <Header/>
           <Navbar/>
           <Info/>
           <Products/>
           <Images/>
           <Footer/>
    </div> 
    
) 
}

export default App 
