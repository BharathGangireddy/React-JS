import React, { useEffect, useRef, useState } from 'react'
import Value2 from './Value2'

function Value() {
  var [timer , setTimer] = useState(0)

  var myRef = useRef()

  useEffect(()=> {
    myRef.current = setTimeout(()=> {
      setTimer(preTimer => preTimer+=1)
    },1000)
    return ()=>{
      clearInterval(myRef.current)
    }
  })

  return (
    <div>
      <h1>Timer : {timer}</h1>
      <button onClick={()=>clearInterval(myRef.current)}> Close</button>
      <Value2 k = {myRef}/>
       </div>
  )
}

export default Value