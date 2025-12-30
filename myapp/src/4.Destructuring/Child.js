import React from 'react'

function Child(props) {
    console.log(props)
    var {count} = props // props destructure
  return (
    <div>Child  count : {count}</div>
  )
}

export default Child