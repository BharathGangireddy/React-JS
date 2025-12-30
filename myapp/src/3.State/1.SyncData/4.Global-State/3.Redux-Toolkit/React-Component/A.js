import React from 'react'
import B from './B'
import C from './C'

import { store } from '../toolKit/store'

import {Provider} from 'react-redux' // Integration Library --> helps react to consume data

// It is stored in redux --> we cannot access value directly

function A() {
  // var value = store.getState() Its not the correct way to access data
  // var value = store.getState()
  // console.log(value)

  return (
    <div>A
     <Provider store = {store} >
      {/* with the help of Provider store (attribute) we can access the data */}
         <B />
         <C /> 

      </Provider>
      
     
    </div>
  )
}

export default A