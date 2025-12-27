import react from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { buyCar } from '../Redux_Library/1.car/actionCreator'



function I() {
  let cars = useSelector((state) => {
        return state.car.noOfCars
})
//console.log(noOfCars_store)

var dispatch = useDispatch()
  
  return (
    <div>
      <p>No of Cars : {cars}</p>
      <button onClick={() => dispatch(buyCar())}>Buy Car</button>
    </div>
  )
}

export default I