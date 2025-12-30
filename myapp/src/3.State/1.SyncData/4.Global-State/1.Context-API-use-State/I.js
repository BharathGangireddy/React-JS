import React, {useContext } from 'react'
import { countContext, nameContext, colorContext}  from './A'


function I() {
  let {count, update_count} = useContext(countContext)
  let name = useContext(nameContext)
  let {color} = useContext(colorContext)
 
  return (
    <div>
        <h1>
            I : {count} <br />
            I : {name} <br />
            I : {color}<br />          
        </h1>
        <button onClick={update_count}>update count</button>
    </div>
  )
}

export default I