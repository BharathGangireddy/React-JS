import React from 'react'
import Child from './Child'

class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            name : "Bharath"
        }
    } // maintains own members
   
  render() {
    const {name}  = this.state
    return (
      <div>
        {/* <h1>{this.state.name}</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.name}</h1>

        <h1>{this.state.name}</h1>
        <h1>{this.state.name}</h1> */}
        <h1>{name}</h1>

         <Child name = {name} />   
      </div>
    )
  } 
}

export default Parent