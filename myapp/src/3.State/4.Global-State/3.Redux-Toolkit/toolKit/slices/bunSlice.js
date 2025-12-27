/* 
Creates a Redux slice (a piece of your store)

Automatically generates:

Action types

Action creators

The reducer

👉 All in a single function call */

import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    noOfBuns : 100
}

let bunReducer = createSlice({
    name : 'BUN', // action /// No switch case Needed 
    initialState,
    reducers : {
        buyBun : (state) => {
            state.noOfBuns -=1
        } 
    }
})

export default bunReducer.reducer

export var {buyBun} = bunReducer.actions

