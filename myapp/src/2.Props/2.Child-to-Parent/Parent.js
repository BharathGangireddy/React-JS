/* 
    Child to Parent Data Transfer :
        1.create Function inside Parent Component
        2.Pass the function as a Prop to Child
        3.Call the Function in the child, While Calling child component can assign data to Parent
*/

import { useState } from "react";
import Child from "./Child";

function Parent() {
    var [x, setX] = useState(100);
    
    function getDataFromChild(data) { // Created a Function inside a Parent Component
        console.log(data)
        setX(data)
    }   
    return ( 
        <>
            <h1>123  : {x} </h1> 
            <Child getData = {getDataFromChild}/>  {/* Function Passed as an Argument */}
        </>
    )

}

export default Parent;