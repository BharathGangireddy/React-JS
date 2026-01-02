import React, { useState } from 'react'

function useCount() {
    var [count , IncreaseCount] = useState(0)
    
    var updateCount = ()=> {
        IncreaseCount(count+1)
    }
  return [count, updateCount]
}

export default useCount