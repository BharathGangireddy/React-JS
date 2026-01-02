import React, { useState } from 'react'

import useCount from './useCount'
function Count1() {
    // var [iQty , updateQty] = useState(0)
    // var updateQtyOfItem = ()=> {
    //     updateQty(iQty+1)
    // }
    var [count,updateCount] = useCount()
  return (
    <div>
        <h1> iphone QTY : {count}</h1>
        <button onClick={()=>updateCount()}>Increase QTY</button> 
    </div>
  )
}

export default Count1       