// import React from 'react'
// import D from './D'
// import E from './E'

// function B() {
//   return (
//     <div>
//         <D />
//         <E />
//     </div>
//   )
// }

// export default Bimport React, { useEffect, useReducer } from 'react'

const store = React.createContext()

function A() {
  const initialState = {
    isLoading: false,
    apiData: [],
    error: null
  }

  const apiReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_LOADING':
        return { ...state, isLoading: true }

      case 'FETCH_SUCCESS':
        return {
          isLoading: false,
          apiData: action.payload,
          error: null
        }

      case 'FETCH_ERROR':
        return {
          isLoading: false,
          apiData: [],
          error: action.payload
        }

      default:
        return state
    }
  }

  // ✅ useReducer MUST come first
  const [LocalState, dispatch] = useReducer(apiReducer, initialState)
  const { isLoading, apiData, error } = LocalState

  // ✅ API call
  useEffect(() => {
    dispatch({ type: 'FETCH_LOADING' })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ERROR', payload: err })
      })
  }, [])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      {error && <h1>{error.message}</h1>}

      {!isLoading && !error && (
        <ul>
          {apiData.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default A
