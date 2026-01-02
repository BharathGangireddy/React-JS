import React, { useEffect, useReducer } from 'react'


function I() {
 
  var initialState = {
  loading : false,
  data : [],
  error : null
}

var APIReducerSetterFunction = (state= initialState , action) => {
  switch(action.type) {
    
    case 'FETCH API LOADING' :
      return {
        ...state ,
        loading : true
    }
    break;
    
    case 'FETCH API SUCCESS' :
      return {
        ...state ,
        data : action.payLoad
        ,loading : false
      }
      break;

    case 'FETCH API ERROR' :
      return {
        ...state ,
        error : action.payLoad,
        loading : false
      }
      break;      

    default :
    return state
  }
} 
var [state , dispatch] = useReducer(APIReducerSetterFunction , initialState)

var {loading , data , error } = state
useEffect(() => {
  console.log('effect calls')
  dispatch({type : 'FETCH API LOADING'})
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) =>{
    dispatch({type : 'FETCH API SUCCESS' , payLoad : data})
    //  console.log(data)  
  })
  .catch(error =>{
    dispatch({type : 'FETCH API ERROR' , payLoad : error})
    console.log(error.message)
})}
,[])

console.log('render')

return (
    <div>
      <h1>Reducer</h1>
      {
      loading ? <h1>Loading</h1> : error ? <h1>{error.message}</h1> :
       data.map((eachPost) => {
        return(
          <div style={{border  : "2px solid" , margin : "5px"}} key = {eachPost.id}>
              <h1>title : {eachPost.title}</h1>
              <p>body : {eachPost.body}</p>
          </div>
        )
       })
      }
    </div>
  )
}

export default I