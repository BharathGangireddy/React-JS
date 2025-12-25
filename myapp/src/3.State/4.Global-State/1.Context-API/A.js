import React, {useState } from 'react'
import B from './B'
import C from './C'

export var x = React.createContext(0)
export var name = React.createContext("Bharath")
export var colorContext = React.createContext('Pink')


function A() {
  var [count,setCount] = useState(1)
  var update_count = () => {
    setCount(count+1)
  }

  var [name_r,setName] = useState("kohli")
  var [color , setColor] = useState("Red updated")
 

  return (
    <div>
      {/* <h1>Component A Count : {count}</h1> */}
      <button onClick={update_count}>update Count : {count}</button>
      <colorContext.Provider value= {color} >
         <name.Provider value ={name_r}>
         <x.Provider value = {count} >
        <B />
        <C />
      </x.Provider>
      </name.Provider>
      </colorContext.Provider>
     
      
      
       
    </div>
  )
}

export default A