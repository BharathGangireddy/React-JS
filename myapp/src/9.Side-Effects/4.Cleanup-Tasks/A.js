import React, { useEffect } from 'react'

function A() {
    var [x, setX] = React.useState(0);
    var [y, setY] = React.useState(0);

    var updateState = (e) => {
        console.log('state update')
        setX(e.clientX)
        setY(e.clientY)
    }


// interact with the browser
    useEffect(()=> {
          console.log('effect runs , event attached')
       // alert('Hello World') 
          window.addEventListener('click' , updateState)
       return ()=> {
          console.log("clean up task performed")
          window.removeEventListener('click' , updateState)
       }
    },[])// runs only once  , here empty dependency is passed
  return (
    <div>
        <h1>x :{x}</h1>
        <h1>y : {y}</h1>
    </div>
  )
}

export default A