// import React from 'react'
import './index.css' 
import {Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
 function Headers() {
  return (
    <div className="Headers-container">
        {/* anchor tags reloads entire page so we use Link component */}
        {/* <a href='/home' element = {<Home />} >Home</a>
        <a href='/about' element = {<About />} >About</a>
        <a href='/products' element = {<Product />} >Product</a> */}

        {/* Link Component : is used to navigate without reloading the page */}

        <Link to = '/home' className=' link-Element'>Home</Link> 
        <Link to = '/about' className=' link-Element'>About</Link> 
        <Link to = '/products' className=' link-Element'>Product</Link> 
    </div>
  )
}

export default Headers