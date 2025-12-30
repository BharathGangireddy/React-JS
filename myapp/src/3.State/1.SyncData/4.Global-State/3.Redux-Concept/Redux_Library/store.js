
// import {createStore} from 'redux'

// // var store = createStore(100) //  We should not directly pass value to Create Store 

// /* 
//     With the help of reducer function we have to pass value
 
// */
// var initialBikeCount = {
//     noOfBikes : 999
// }
// // The reducer function takes Initial value and action , which returns new state based on action
// var bikeReducer = (state = initialBikeCount , action) => { 
//     console.log(action.type) // it is an Object

//     switch(action.type) {
//         case 'BUY_BIKE' : 
//             return {
//                 noOfBikes : state.noOfBikes -1      // initially the action triggers once by default
//             }
//         default :
//             return state
//     }
// }

// export var store = createStore(bikeReducer) // Step 1 :: redux stores the data
// console.log(store) // It is an Object which contains functions such as getState() , dispatch()


//// -------------------- STEP 1 ------------------------------

//in REDUX with the help of CreateStore() we can store DATA 

import {combineReducers, createStore} from 'redux'


import { carReducer } from './1.car/carReducer';
import { bikeReducer } from './2.Bike/reducer';


let rootReducer = combineReducers({  // used to combine reducer functions
    car : carReducer,
    bike : bikeReducer
})


export var reduxStore = createStore(rootReducer)  // store  contains initital state
console.log(reduxStore); // dispatch Function will be in

/*  We cannot directly pass a NUMBER or INTEGER 
    --> With the help of reducer function we can pass value pass value
    Reducer function takes state : initial value and action as input and 
    returns new state based on action */
