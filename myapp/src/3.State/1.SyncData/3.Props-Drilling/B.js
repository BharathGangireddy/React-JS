import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  // console.log("1234 "+ props.x)
  // console.log(props.f)
  return (
    <div>
       <D />
       <E x = {props.x} f = {props.f} />
    </div>
  )
}

export default B