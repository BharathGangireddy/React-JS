import React, { useEffect, useState } from 'react'

function A() {
  var [normalCount, setNormalCount] = useState(0)  
  var [domCount , setDomCount] = useState(0)
  console.log('render')

  useEffect(()=> {
    console.log("effect runs")
    document.title = domCount
  })

  return (
    <div>
      <h1>Normal Count : {normalCount}</h1>
      <button onClick={() => setNormalCount(normalCount+1)}>Increase Nrml Count</button>

      <h1>DOM Count : {domCount}</h1> 
      <button onClick={()=> setDomCount(domCount+1)}>Increase DOM Count</button>
      
    </div>
  )
}

export default A