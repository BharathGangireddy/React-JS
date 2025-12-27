import {configureStore} from '@reduxjs/toolkit'
import CakeReducer from './slices/cakeSlice'
import bunReducer from './slices/bunSlice'


 // How to Store in Redux toolkit
export let store = configureStore({
    reducer : {
        cake : CakeReducer,
        bun : bunReducer
    }
})