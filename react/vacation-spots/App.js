import React from 'react'
import VacationSpot from './VacationSpot.js'


const App =(props)=>{
    let destination =[
        {_id: "0", place: "Meridian, Idaho", price: 40, timeToGo: "Spring"},
    {_id: "1", place: "Cancun", price: 900, timeToGo: "Winter"}, 
    {_id: "2", place: "China", price: 1200, timeToGo: "Fall"},
    {_id: "3", place: "Russia", price: 1100, timeToGo: "Summer"},
    {_id: "4", place: "Lebanon", price: 400, timeToGo: "Spring"},
    
  ]
  const mappedDestination = destination.map((spot =>
                                            <VacationSpot
                                                key ={spot._id} 
                                                place={spot.place}
                                                price={props.price} 
                                                timeToGo={props.timeToGo}/>))      
  return(
      <div>
          <h1>Destination</h1>
           {mappedDestination}
      </div>
  )     
}    

export default App 