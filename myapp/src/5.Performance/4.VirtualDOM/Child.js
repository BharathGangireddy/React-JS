

import React, { useState } from 'react'

function Child(props) {
  var {num} = props
   // var {objName} = props
  // var {name}  = objName

  // 
  // console.log(objName)
  console.log('child render')
  return (
    <div>
      <h1>num : {num}</h1>
    </div>
  )
}

export default React.memo(Child)