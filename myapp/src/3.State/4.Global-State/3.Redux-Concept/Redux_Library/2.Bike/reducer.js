// With the help of Redux library we can create a global state for our application.

import { createStore } from "redux";

let initialState  = {
    noOfBikes : 888 // initial state which holds initial value which is in Object form
}
// reducer function which holds the initial state and action
export var bikeReducer  = (state = initialState , action) => {
    switch(action.type) {
        case 'BUY_BIKE' :
            return {
                noOfBikes : state.noOfBikes - 1
            }
            break ;
        default :
            return state
    }
}


var bikeStore = createStore(bikeReducer) 

console.log(bikeStore) // Object which holds the many functions (dispatch)