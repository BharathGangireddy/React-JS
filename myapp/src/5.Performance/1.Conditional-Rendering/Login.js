import React from 'react'
import './style.css' 

function Login(props) {
    return (
    <div className='form-container'>
       
        <form>
            <div className='email'>
                <label htmlFor='text'>Email</label>
                <input type = "text" id = "text" placeholder='Enter your Email' />
            </div>
            <div className='password'>
                <label htmlFor='' >Password</label>
                <input type = 'password' placeholder='Enter your Password' />
            </div>
            <button onClick={() => props.setIsLoggedIn(true)}>Login</button>

        </form>
            
    </div>
  )
}

export default Login