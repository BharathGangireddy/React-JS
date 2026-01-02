import React, { useRef, useState } from 'react'

function Variables() {
    var normalVariable = 0;
    var [stateVariable , setStateVaribale] = useState(0);
    var reffVariable = useRef(0);
    
  
    // console.log(stateVariable);
    // console.log(reffVariable); 
    var normalUpdate = () => {
        normalVariable +=1;
        console.log('NV' , normalVariable);
    }
    var reffVariableUpdate =()=>{
        reffVariable.current += 1
        console.log('RV' , reffVariable)
    }        
     var stateVariableUpdate = () => {
        setStateVaribale(stateVariable++); 
        console.log('SV' , stateVariable);
     }
    console.log("render")
  return (
    <div>
        <h1> normal Variable : {normalVariable}</h1>
        <h1> state Variable : {stateVariable}</h1>
        <h1>reff Variable : {reffVariable.current}</h1>

        <button onClick= {() => normalUpdate()}>normal Variable Update</button>
        <button onClick={()=>stateVariableUpdate()}>state Variable Update</button>
        <button onClick={()=>reffVariableUpdate()}>Ref Variable Update</button>
    </div>
  )
}

export default Variables