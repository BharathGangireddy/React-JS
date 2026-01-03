//import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
//import Products from './Products'
import './Headers.css' 


function ProductDescription() {
    var {id} = useParams()
    var dataTransferViaLink = useLocation()
    var {name} = dataTransferViaLink.state 
  return (
    <div>
        <div className='productDescription'>
        <h1>ProductId : {id}</h1>
        <h1>Name : {name}</h1>
        <h1>Price : </h1>
        <h1>Description : </h1>
        </div>
</div>
  )
}

export default ProductDescription