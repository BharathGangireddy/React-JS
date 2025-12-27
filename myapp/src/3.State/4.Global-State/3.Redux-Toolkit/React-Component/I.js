import react from 'react'

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { buyCake } from '../toolKit/slices/cakeSlice'
import { buyBun } from '../toolKit/slices/bunSlice'

function I() {

  var cakes = useSelector((state) => {
    return state.cake.noOfCakes
  })

  var buns = useSelector((state) => {
    return state.bun.noOfBuns
  })

  var Dispatch = useDispatch()
  
  return (
    <div>
      <h1>No Of Cakes : {cakes}</h1>
      <button onClick={() => Dispatch(buyCake())} >Get cake</button>

      <h1>noOfBuns : {buns}</h1>
      <button onClick={() => Dispatch(buyBun())}>Get Bun</button>
      </div>
  )
}

export default I
