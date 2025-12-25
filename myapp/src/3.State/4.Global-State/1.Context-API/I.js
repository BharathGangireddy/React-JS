import React, {useContext } from 'react'
import {x,name , colorContext} from './A'


function I() {
  let value =useContext(x) // React Hook must be called inside a Reatc functional Component 
  let y = useContext(name)
  let v = useContext(colorContext)
 
  return (
    <div>
        <h1>
            I : {x._currentValue} <br />
            I : {y} <br />
            I : {v}<br />
            I : {value}
          
        </h1>
    </div>
  )
}

export default I