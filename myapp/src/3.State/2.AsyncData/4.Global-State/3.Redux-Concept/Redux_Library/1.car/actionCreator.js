//var CAR_BUY =  'CAR_BUY'   // ==> action type 

import { CAR_BUY } from "./actionType"

 
export let buyCar = () => { // action creator
    return {
        type : CAR_BUY, // action
    }
}