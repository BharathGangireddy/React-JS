import React, { useRef, useEffect, useState } from 'react'

function InputElement() {

    var [data , setData] = useState("Enter to Display")

  const inputRef = useRef()
  console.log(inputRef);

  useEffect(()=> {
    inputRef.current.focus()
  })

  let getValue = () => {
    setData(inputRef.current.value)
  }

  return (
    <div>
        <h1>Data : {data}</h1>

      <input type="text" ref={inputRef} />
      <button onClick={()=> getValue() }> get Data</button>
    </div>
  )
}

export default InputElement
