import React, { useReducer, useState } from 'react'

function Data() {

 /*  let [x,setX] = useState(10) // useState returns an array with two elements // It is a hook.
  
   // setter functions update the data in local State
  var increase_x = () =>{setX(x+1)}
  var decrease_x = () =>{setX(x-1)}
  var reset = () =>{setX(0)}
 */

  
  //////UseReducer() Hook
  let initialState = {count : 0}; // should  be in Object Form
  
  let reducer = (state = initialState , action) => {
    switch(action.type) {
      case 'increase' :
        return {
          count : state.count + action.payload
        }      
      break;
      case 'decrease' :
        return {
          count : state.count - action.payload
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

  let [state , dispatch] = useReducer(reducer , initialState);



  return (
    <div>
      <h1>Data : {state.count}</h1>

      <button onClick={()=> dispatch({type : 'increase' , payload : 100})}>increase</button>
      <button onClick={()=> dispatch({type : 'decrease' , payload : 200})} >decrease</button>
      <button onClick={() => dispatch({type : 'reset'})}>reset</button>
      {/* <button onClick={() => increase_x()}>Click to Increase</button> 
      <br />
      <button onClick={() => decrease_x()}>Click to Decrease</button>
      <br />
      <button onClick={() => reset()}>Click to Reset</button> */}
    </div>
  )
}

export default Data