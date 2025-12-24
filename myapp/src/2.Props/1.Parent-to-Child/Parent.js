import { useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

function Parent() { 
    let name  = "Bharath"
    let age = 24      // Local State

    var [x , update_x] = useState(100)
    var update_x = () => {
       console.log(x);
        x++;
    }

    return(
        <div>
            <h1>Hello</h1>
            <Child1 name = {name} age = {age} x = {x}/> {/*  // internally it is a Function --> Child1() */}
            <Child2 age  ={age} /> 
            <button onClick={update_x}>{x}</button>
        </div>
    )
}

export default Parent