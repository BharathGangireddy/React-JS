import React from 'react'

import './index.css'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  var ProductDetails = [
    {id : 1 , name : 'Laptop' , price : 45000},
    {id : 2 , name : 'Mobile' , price : 25000},
    {id : 3 , name : 'Tablet' , price : 15000},
    {id : 4 , name : 'Monitor' , price : 10000},
    {id : 5 , name : 'Keyboard' , price : 2000},
    {id : 6 , name : 'Mouse' , price : 1000}
  ]

  return (
    <div>
      <h1>Product Details</h1>
        <div className='Product-Details'>
          {
            ProductDetails.map(eachProduct => {
             return(
              <Link state = {eachProduct}key = {eachProduct.id} to = {`${eachProduct.id}`}>{eachProduct.name}</Link>
             )
            })
          }
         
          
        </div>
         <Outlet />  
          {/* Renders the child route */}
      </div>
  )
}

export default Product