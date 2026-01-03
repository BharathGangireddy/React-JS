import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDescription() {
  var getId = useParams() // gives id from URL (any data type)
  
  var dataFromURL = useLocation() // hook used to access state data from url
  console.log(dataFromURL.state)
  
 var {id,name,price} =dataFromURL.state
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Price: {price}</h1>
    </div>
  )
}

export default ProductDescription