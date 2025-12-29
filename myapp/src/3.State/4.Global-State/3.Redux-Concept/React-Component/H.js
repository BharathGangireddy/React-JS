import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBike } from '../Redux_Library/2.Bike/bike_actionCreator'

//With the help of Use Selector Hook we can access store data in React


function H() {

  var bike = useSelector((state) => {
    return state.bike.noOfBikes
  })
  var bikeDispatch = useDispatch()


  return (
    <div>
      <h1>H : No Of Bike : {bike}</h1>
      <button onClick = {() => bikeDispatch(buyBike())}>Get Bike</button>
      {/* <button onClick={() => bikeDispatch(buyBike())}>Buy Bike</button> */}
    </div>
  )
}

export default H 

