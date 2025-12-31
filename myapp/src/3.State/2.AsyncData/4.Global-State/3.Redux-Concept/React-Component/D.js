import React from 'react'

import { useSelector } from 'react-redux' 

function D() {

var cars = useSelector((store) => { // STEP 2 How to consume
    return store.car.noOfCars
  })

  return (
    <div>
      <h1>D : No of Cars : {cars}</h1>
    </div>
  ) 
}

export default D