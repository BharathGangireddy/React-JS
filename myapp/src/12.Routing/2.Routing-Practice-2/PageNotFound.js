import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function PageNotFound() {
  var navigate = useNavigate()

  useEffect(()=> {
    setTimeout(()=> {
      navigate('/home');
    },1000)
  }) // Navigates to Home after 1 milli second
  return (
    // <Navigate to = "/Home" /> // Helps to navigate to Home immediatel
    ''
  )
}

export default PageNotFound