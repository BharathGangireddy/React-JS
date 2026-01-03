//import React from 'react'
import './Headers.css' 
import { Link, Outlet} from 'react-router-dom'
//import ProductDescription from './ProductDescription'



function Products() {
  
    var products = [{name : "Apple" , id : 1 }, 
    {name : "Banana" , id : 2},
    {name : "Grapes" , id : 3} ,
    {name : "Orange" , id : 4},
    {name : "Pineapple" , id : 5},
    {name : "Mango" , id : 6}  
     ]
  return (
  
    <div className='x'>
      <h1>Products container</h1>
    <div className='products-container'>
      {
      products.map(eachItem => { 
          return <Link key= {`${eachItem.id}`}state = {eachItem} to= {`/products/${eachItem.id}`}>{eachItem.name}</Link>
      })
      } 
      </div>
          <Outlet />  {/*  // renders the child route component here */}
      
      </div>
  )

}

export default Products