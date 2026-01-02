import React, { useState } from 'react'

import useCount from './useCount'
function Count2() {
    // var [iQty , updateQty] = useState(0)
    // var updateQtyOfItem = ()=> {
    //     updateQty(iQty+1)
    // }
    var [count,updateCount] = useCount()
  return (
    <div>
        <h1> iphone QTY : {count}</h1>
        <button onMouseOver={()=>updateCount()}>Increase QTY</button> 
    </div>
  )
}

export default Count2       