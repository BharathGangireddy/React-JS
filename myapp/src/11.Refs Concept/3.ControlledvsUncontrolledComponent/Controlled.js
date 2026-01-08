import React, { useEffect, useState } from 'react'

// While handling form data using Controlled Components, the form data is handled by the React component state.
function Controlled() {
    var [data, setData] = useState('')  

    // const onChangeSearch = (event) => {
    //     console.log(event.target.value)
    // }

    useEffect(() => {
       
    })

    var handleSubmit = (e) => {
        e.preventDefault()
        console.log('Handled Event')
        alert(`You have submitted ${data} word`)
    }
    return (
    <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor='search'>Enter your word</label>
        <br/>
        <input id = 'search' value = {data} placeholder='Enter here' onChange={(e) => setData(e.target.value)} />
        <h1>{data}</h1>
        <button type ='submit'>submit</button>
    </form>

  )
}

export default Controlled