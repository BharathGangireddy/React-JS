import React from 'react'

 class Child extends React.Component {
  render() {
   
    var {name} =  this.props
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default Child