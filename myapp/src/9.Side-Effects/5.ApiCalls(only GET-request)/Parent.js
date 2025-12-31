import React, { useEffect, useState } from 'react'

function Parent() {
  var [loading , setLoading ] = useState(false)
  var [data , setData] = useState([])
  var [error , setError]  = useState(null)
    

  let getData = () => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
       console.log(data)
       setData(data)
       setLoading(false)
    })
    .catch(e => {
      setError(e.message)
    })
  }
//   useEffect(()=> {
// setLoading(true)
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data =>{
//        console.log(data)
//        setData(data)
//        setLoading(false)
//     })
//     .catch(e => {
//       setError(e.message)
//     })

//   } , [])
   
   
  return (
    <div>
        <h1>Posts</h1>
        <button onClick={()=> getData()}>Get Data</button>
        { 
          loading ? <h1>Loadin...... {loading}</h1> : error ? <h3>{error.message}</h3> :
         
        data.map(item=> {
                return <React.Fragment key = {item.id}>
                    <div style={{border  : "2px solid" , margin : "5px"}}>
                    <h1>title : {item.title}</h1>
                    <p>body : {item.body}</p>
                </div>
                </React.Fragment>
            })
        }
    </div>
  )
}

export default Parent