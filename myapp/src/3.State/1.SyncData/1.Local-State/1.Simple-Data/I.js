import React, { useState } from 'react'

function I() {
    var [x , setX] = useState(10) // useState build in Function  // setX is used to update Value
    console.log(x)

    var updateX = () => {setX(x+1)} // Updated Data using state variable
    
  return (
    <div>
        <h1>I : {x}</h1> {/* We cosumed Data using state*/}
        <button onClick = {updateX}>Update x</button>
    </div>
  )
}

export default I