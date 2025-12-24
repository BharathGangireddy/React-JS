import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
/* 
    Child tp o Parent data 
    1.Create a function inside Parent Component
    2.Pass the function as a Prop to Child

*/
function Parent() {
    //access data by Local State
    var [x,setX] = useState(0)

    function getDataFromChild1(a) {
        console.log(a)
        setX(a)
    }
    return (
        <>
            <h1>Parent : {x}</h1> 
            <Child1 getData = {getDataFromChild1}/>
            <Child2 x = {x} />
        </>   
    )
}

export default Parent;