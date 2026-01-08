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
    return (
      <div>
        <h1>{this.state.name}</h1>
         <Child name = {this.state.name} />   
      </div>
    )
  } 
}

export default Parent