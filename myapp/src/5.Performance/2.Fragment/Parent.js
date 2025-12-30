import React from 'react'

function Parent() {
  return (
  /*   <div className='myDiv'> // div crates an extra node in the DOM, it impacts performance
        <h1>P1</h1>        
        <h1>P2</h1>
    </div> */

    // with the help of Fragment we can avoid extra div node in the DOM
    <React.Fragment>
        <h1>P1</h1>        
        <h1>P2</h1>
    </React.Fragment>
  )
}

export default Parent