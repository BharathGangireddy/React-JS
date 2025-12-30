import React, { useContext } from 'react'

import C from './C'
import { countContext} from './A'

function D() {
   var {Localstate, dispatch} = useContext(countContext) 
   console.log(Localstate.count)
  return (
    <div>
      <h1> D : {Localstate.count}</h1>
       <button onClick={() => dispatch({type : 'increase'})}>Increase</button> 
    </div>
  )
}

export default D