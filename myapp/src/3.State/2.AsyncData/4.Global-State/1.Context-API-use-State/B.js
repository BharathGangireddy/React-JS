import React, { useContext } from 'react'
import { StoreContext } from './A'

function B() {
  const data = useContext(StoreContext)

  return (
    <div>
      <h2>Posts</h2>
      {data.map(item => (
        <p key={item.id}>title : {item.title}</p>
      ))}
    </div>
  )
}

export default B
