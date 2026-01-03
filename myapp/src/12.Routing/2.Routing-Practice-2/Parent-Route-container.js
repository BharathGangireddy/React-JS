//import React from 'react'
import { Routes , Route, useLocation } from 'react-router-dom'
import Headers from './Headers'

import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import PageNotFound from './PageNotFound'
import ProductDescription from './Pages/ProductDescription'

function Parent() {
  var location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Welcome to Routing </h1>
        {/*  Common content is placed between Browser Router and Routes*/}
        {location.pathname !== '/about' && <Headers />}
      {/* <Headers />  */}
        <Routes>
          <Route path='/about' element = {<About /> }></Route>
          <Route path = '/home' element = {<Home />}></Route>
          <Route path='/products/' element = {<Product />}>
              <Route path = ':id' element = {<ProductDescription />}></Route>
          </Route>
        
          {/* <Route path ='/products/:id' element = {<ProductDescription />}></Route> --> Dynamic Routing */ }
          
          <Route path = '*' element = {<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

export default Parent