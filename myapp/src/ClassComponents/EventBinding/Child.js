import React from 'react'

 class Child extends React.Component {
// Event Binding can be done using by arrow functions and   
  

  updateCount = () => {
      console.log(this) 
    }

    render() {
   
    var {name} =  this.props
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.updateCount}>updateCount</button>
      </div>
    )
  }
}

export default Child