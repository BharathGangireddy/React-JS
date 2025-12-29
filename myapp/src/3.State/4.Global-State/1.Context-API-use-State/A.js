import React, {useState } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext(0)
export var nameContext   = React.createContext("Bharath")
export var colorContext = React.createContext('Pink')


function A() {
  var [count,setCount] = useState(1)
  
  var update_count = () => {
    setCount(count+1)
  }

  var [name,setName] = useState("kohli")
  var [color , setColor] = useState("Red updated")

  var updateColor  = () => {setColor('UPDATED Color')}
 

  return (
    <div>
      {/* <h1>Component A Count : {count}</h1> */}
      <button onClick={update_count}>update Count : {count}</button>
      <colorContext.Provider value= {{color , updateColor}} >
         <nameContext.Provider value ={name}>
         <countContext.Provider value = {{count, update_count}} >
        <B />
        <C />
      </countContext.Provider>
      </nameContext.Provider>
      </colorContext.Provider> 
       
    </div>
  )
}

export default A