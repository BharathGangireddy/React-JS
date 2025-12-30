let initialCarCount = {       //initial State 
    noOfCars : 2000
} 
console.log(initialCarCount.noOfCars)

export var carReducer = (state = initialCarCount , action) => {
    switch(action.type) {    // reducer
        case "CAR_BUY" :
            return {
                noOfCars : state.noOfCars-1
            }
            break;
            default :
                return state
    }
}
