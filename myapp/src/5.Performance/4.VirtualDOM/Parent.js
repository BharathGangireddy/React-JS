import React, { useState } from 'react'
import Child from './Child'
/* 
    No changes in the child, but it renders again.
    --> it is unnecessary re-rendering, to control this we use React.memo
*/
function Parent() {
    var [ x , setX ] = useState(0)
    var [num , setNum] = useState(0) // use state holds inital memory Location, no render in component until it gets updated
    var [name , setName] = useState({value : "Bharath"})
        // Holds the initial Memory reference Location of an Object  , no change it child does not re-render   
    
    var [value , setValue] = useState([1,2,4,5,6])
    // Holds the initial Memory reference Location of an Array  , no change it child does not re-render   

    // use state hook maintains the initial refernce number between re-renders
    console.log('Parent render')

    var updateX = () => {
        setX(x+1)     
    }

    // inLine Values
    let k = 100
    let z = {a : 100} // every time memory for reference updates so the child component re-renders
    let z1 = [1,2,3,4]
    let z2 = ()=>{}

  return (
    <div>
        <p>Parent Component : {x} </p>
        <button onClick={() =>  updateX()}>Click me to Update</button>
        {/* <Child num = {num}  /> */}
        {/* <Child  name = {name} /> */}
        {/* <Child value  = {value} /> */}
        <Child k = {z2} />
    </div>
  )
}

export default Parent 