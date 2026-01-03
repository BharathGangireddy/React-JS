
import './Headers.css' 
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <div className='headers-container'>
        <div className='content'>
            <h2>logo</h2>
        </div>
        <div className = 'route-container'>
            <Link to = "/home" >Home</Link> <br/>
            <Link to = "/About">About</Link> <br/>
            <Link to = '/Products'>Products</Link> <br/>
        </div>
    </div>
  )
}

export default Headers