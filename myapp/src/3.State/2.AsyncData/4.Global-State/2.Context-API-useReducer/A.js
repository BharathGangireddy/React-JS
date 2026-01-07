// import React, { useEffect, useReducer } from 'react'

// const store = React.createContext();

// function A() {
//   const initialState = {
//   isLoading: false,
//   apiData: [],
//   error: null
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_LOADING':
//       return {
//         ...state,
//         isLoading: true,
//         error: null
//       }

//     case 'FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         apiData: action.payload
//       }

//     case 'FETCH_ERROR':
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload
//       }

//     default:
//       return state
//   }
// }

// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   initialState.isLoading = true
//   .then(response => {
//     if(!response.ok) {
//       throw new Error ("Fetch failure")
//     }return response.json()
//     .then(data => 
//       initialState.apiData = data,
//       initialState.isLoading = false
//     ) 
//   })
// },[])


// let [Localstate , dispatch] = useReducer(reducer ,initialState)
// return (
//   <div>
//     <h1>{Localstate.count}</h1>
//       <p>{Localstate.apiData}</p>

//       {
//     Localstate.isLoading ? 
//         <h1>Loading...</h1> : Localstate.error
//           ? <h1>{Localstate.error}</h1> :
//           <h1>{Localstate.apiData}</h1>
      
//     }

      
//   </div>
// )
// }

// export default A

import React from 'react'

function A() {
  return (
    <div>A</div>
  )
}

export default A