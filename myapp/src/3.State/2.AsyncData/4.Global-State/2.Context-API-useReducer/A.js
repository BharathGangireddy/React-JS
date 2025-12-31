import React, { useContext, useReducer } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext()//initial state

//console.log(globalStore._currentValue)
function A() {

  let initialCount = {
    count : 0 // Local State
  }

  let reducer = (state = initialCount , action)=> {
    switch(action.type) {
       case 'increase' :
        return {
          count : state.count +1
        }      
      break;
      case 'decrease' :
        return {
          count : state.count -1
        }
      break;
      case 'reset' :
        return {
          count : state.count = 0
        }
      break 
      default :
      return state
    }
  }

  let [Localstate , dispatch] = useReducer(reducer , initialCount)
 
  return (
    <div>
      <h1>
        A  {Localstate.count}
      </h1>
    <countContext.Provider value  = {{Localstate , dispatch}} >
         <B />
        <C />
    </countContext.Provider>
   
    </div>
  )
}

export default A


 /* // var value = globalStore._currentValue
  // console.log(value) // its a bad Practice
  var value = useContext(globalStore)
  console.log(value) */