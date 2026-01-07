import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'

export const StoreContext = React.createContext()

function A() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data')
        return res.json()
      })
      .then(result => setData(result))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <StoreContext.Provider value={data}>
      <B />
      <C />
    </StoreContext.Provider>
  )
}

export default A
