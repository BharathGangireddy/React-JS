import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    noOfCakes : 999999
}

var cakeReducer = createSlice({
    name : 'CAKE' , // action  name : Predined 
    initialState , //  initialState is pre defined if key and values are same we can pass key
    reducers : {
        // immer library mutates state 
        buyCake : (state) => { // state -- initial state
            state.noOfCakes -= 1
         }
        } 
}) 

export default cakeReducer.reducer // 

export let  {buyCake} =  cakeReducer.actions
