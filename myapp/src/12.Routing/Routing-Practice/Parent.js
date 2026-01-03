
import {Routes , Route, useLocation} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Headers from './Headers'
import Products from './Products'
import PageNotFound from './PageNotFound'
import ProductDescription from './ProductDescription'

function Parent() {
  var Location = useLocation()
  console.log(Location)
  return (
    <div>
      {/* <Headers />   */}
        {Location.pathname !== '/Products' && <Headers />}
         <div>
            <Routes>
              <Route path = '/home' element =  {<Home />}></Route>
              <Route path = '/about' element =  {<About />}></Route>
              <Route path = '*' element = {<PageNotFound />} ></Route>
              <Route path = '/products' element = {<Products />} >
                  <Route path = ':id' element = {<ProductDescription />}></Route>
              </Route>  
            </Routes>
           
        </div>
    </div>
  )
}

export default Parent