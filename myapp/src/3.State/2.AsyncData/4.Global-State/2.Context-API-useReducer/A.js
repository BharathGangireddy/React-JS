  // import React, { useEffect, useReducer } from 'react'

  // // API CALLS USING CONTEXT API AND useReducer HOOK

  // const store = React.createContext() 

  // function A() {
  //   const initialState = {
  //     isLoading : false , 
  //     apiData : [],
  //     error :  null
  //   }

  //   const apiReducer = (state , action) => {
  //     switch(action.type){
  //       case('FETCH_LOADING') :
  //         return {
  //           ...state ,
  //           isLoading : true
  //           }
        
  //         case('FETCH_SUCCESS') :
  //           return{ 
  //             isLoading : false ,
  //             apiData : action.payLoad,
  //             error : null
  //           }
          
  //           case('FETCH_ERROR') :
  //           return{
  //             isLoading : false , 
  //             apiData : [], 
  //             error : action.payLoad 
  //           }
      
  //         default :
  //             return state
  //         }
  //   }
  // // useEffect(() => {
  // //   dispatch({ type: 'FETCH_LOADING' })

  // //   fetch('https://jsonplaceholder.typicode.com/posts')
  // //     .then(res => res.json())
  // //     .then(data => {
  // //       dispatch({ type: 'FETCH_SUCCESS', payload: data })
  // //     })
  // //     .catch(err => {
  // //       dispatch({ type: 'FETCH_ERROR', payload: err })
  // //     })
  // // }, [])


  //   useEffect(()=> {
  //     dispatch({type : 'FETCH_LOADING'})
  //     .fetch('')
  //       .then((response) => response.json())

        
  //   })

  //   const [LocalState , dispatch] = useReducer(apiReducer , initialState)
  //   // console.log(LocalState)

  //   const {isLoading , apiData , error} = LocalState

  //   return (
  //     <div>
  //     {
  //       isLoading ? <h1>Loading....</h1> : error ? <h1>{error.message}</h1> :
  //         console.log(apiData)
  //       }
  //     </div>
  //   )
  // }

  // export default A