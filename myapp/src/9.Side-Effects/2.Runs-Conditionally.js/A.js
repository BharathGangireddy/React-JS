import React, { useEffect, useState } from 'react'

function A() {
  var [normalCount, setNormalCount] = useState(0)  
  var [domCount , setDomCount] = useState(0)
  console.log('render')


  //Default Behavior Of useEffect :: It runs after every Render Cycle
  // It runs after the first render and after every update

  // Even if no sideEffects are specified, useEffect will still run after every render
  useEffect(()=> {
    console.log("effect runs")
    document.title = domCount // Updates the title of the Page 
  }, [domCount]) // runs based on Condition.
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