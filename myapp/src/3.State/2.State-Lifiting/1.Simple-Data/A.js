import React , {useState } from 'react'
import B from './B'
import C from './C'

function A() {
  // State Lifing : we lifted the state to Parent Component A from Child Components I and H
      // When multiple components need to share and update the same state, it's best to lift the state up to their closest common ancestor.
      // This way, the shared state is managed in one place, and the common ancestor can pass it down as props to the child components that need it.

  var [x , setX] = useState(10) // useState build in Function  // setX is used to update Value
      console.log(x)
  
      var updateX = () => {setX(x+1)} // Updated Data using state variable
      
  return (
    <div>
        <B /> 
        <C />
    </div>
  )
}

export default A