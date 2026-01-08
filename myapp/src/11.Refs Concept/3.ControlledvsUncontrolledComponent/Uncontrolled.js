import React, { useEffect } from 'react'
import { useRef } from 'react'

function Uncontrolled() {
    const inputRef = useRef()

    useEffect(()=> {
        inputRef.current.focus()
    })
    const getValue = (e) => {
        console.log(inputRef.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
    
  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type = 'text' ref = {inputRef} />
            <button onClick={getValue}>button</button>
        </form>
        
      </div>
  )
}

export default Uncontrolled