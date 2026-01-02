import React, { useContext, useEffect, useState} from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext(0)
function A() {
// console.log(store._currentValue) // We can access the stored data(bad practice)
// console.log(useContext(store))   // best



var [loading, setLoading] = useState(false)
var [arrayData , dataFromServer] = useState([])
var [error , setErrorMessage] = useState(null)


useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      dataFromServer(data)
      setLoading(false)
      console.log(data)
    })
    
    .catch(e => {
     setErrorMessage(e.message)
    })
},[])

  return (
   
    <div>
      {
        loading ? <h1>loading.......</h1> : error ? <h1>{error.message}</h1> :
         arrayData.map(eachItem => {
          return(
            <div key= {eachItem.id}>
              <h1>Title :{eachItem.title}</h1>
              <p>Body: {eachItem.body}</p>
            </div>
          )
        })
      }
     
    </div>
  )
}

export default A