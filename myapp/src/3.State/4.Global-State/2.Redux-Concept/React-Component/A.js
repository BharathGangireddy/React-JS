import React from 'react'
import B from './B'
import C from './C'


import {Provider} from 'react-redux' // Integration Library --> helps react to consume data
import { reduxStore } from '../Redux_Library/1.car/store'
// It is stored in redux --> we cannot access value directly

function A() {
  // var value = store.getState() Its not the correct way to access data
  // var value = store.getState()
  // console.log(value)

  return (
    <div>A
     <Provider store = {reduxStore} >
      {/* with the help of Provider store (attribute) we can access the data */}
         <B />
         <C /> 

      </Provider>
      
     
    </div>
  )
}

export default A