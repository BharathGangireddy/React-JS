import React, { useContext } from 'react'
import {countContext} from './A'

function H() {
    var {count} = useContext(countContext)
  return (
    <div>
        <h1>
            H : {count}
        </h1>
    </div>
  )
}

export default H