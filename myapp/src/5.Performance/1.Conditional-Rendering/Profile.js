import React from 'react'

import './style.css'

function Profile(props) {
  return (
    <div className='profile-container'>
          <h1>Name : Bharath</h1>
          <h2>age : 24</h2>
          <h3>Place : Kurnool</h3>
          <img src="https://www.bing.com/th/id/OIP.XA-1C1xmsiG39LaQs1OeCgHaE8?w=294&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2 img"
              alt="image loading" className='img' />
              <br />
        <button onClick={()=> props.setIsLoggedIn(false)}>Logout</button>
      </div>
      
        
  )
}

export default Profile