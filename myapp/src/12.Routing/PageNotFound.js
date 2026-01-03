import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
//Navigate
function PageNotFound() {
  var navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=> {
       navigate("/home")
    },1000)
  })

  return (
    <div>
      {/* <h1>PageNotFound</h1> */}
      {/* <Navigate to = "/home" /> */} 
    </div>
  )
}

export default PageNotFound