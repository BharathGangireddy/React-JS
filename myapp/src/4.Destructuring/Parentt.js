import React, { useState } from 'react'
import Child from './Child'

function Parentt() {
    var [count] = useState({value : 10})
    var {value} = count // state Destructuring

    var [count_array] = useState([99, 20,30])
    var [c1,c2,c3] = count_array 

  return (
    <div>
        <h3>Parent count :{c1} , {count.value}</h3> {/* withoutDestructuring */}
        <h1>Parent count  : {value}</h1> {/* with Destructuring */}
        <Child count = {value}/> 

    </div>
  )
}

export default Parentt