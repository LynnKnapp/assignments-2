import React from 'react'
import "./App.css"
import Spot from "./Spot"

const App = (props) =>{
    console.log(props.data)
    
    let vacationSpots = [
    
        {_id: "0", place: "Meridian, Idaho", price: 40, timeToGo: "Spring"},
        {_id: "1", place: "Cancun", price: 900, timeToGo: "Winter"}, 
        {_id: "2", place: "China", price: 1200, timeToGo: "Fall"},
        {_id: "3", place: "Russia", price: 1100, timeToGo: "Summer"},
        {_id: "4", place: "Lebanon", price: 400, timeToGo: "Spring"},
        
        
      ]
      const mappedVacationSpots = vacationSpots.map(( spot =>
            <Spot key ={spot._id} place = {spot.place} price = {spot.price} timeToGo ={spot.timeToGo} />))
    return(
        <div>
            {mappedVacationSpots}
        </div>
    )

}
      
export default App