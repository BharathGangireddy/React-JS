import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
  var [isLoggedIn , setIsLoggedIn] = useState(true) 
  //1. if-else Conditional Rendering
/*   if (isLoggedIn) {
    return <Profile setIsLoggedIn = {setIsLoggedIn} />
  } else {
   return <Login setIsLoggedIn = {setIsLoggedIn} />
  } */
//2.element variable
var element ;
/* 
 if (isLoggedIn) {
    element =<Profile setIsLoggedIn = {setIsLoggedIn} />
  } else {
   element =<Login setIsLoggedIn = {setIsLoggedIn} />
  }
  return (
    element
  ) */
/* 
// Ternary Opetator
return(
  isLoggedIn ?  <Profile setIsLoggedIn = {setIsLoggedIn} /> : <Login setIsLoggedIn = {setIsLoggedIn} />
) */

  //4.short circuit --> renders only true case

  //return isLoggedIn && <Profile setIsLoggedIn= {setIsLoggedIn} /> 

}

export default Parent