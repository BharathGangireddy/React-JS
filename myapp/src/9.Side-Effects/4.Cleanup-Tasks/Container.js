import React, { useState } from 'react'
import A from './A'

function Container() {
    var [Display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!Display)}>Toggle Container</button>
        {
            Display &&<A />
        }
    </div>
  )
}

export default Container