import React from 'react'

function Child(props) {
    var {num } = props
    console.log('Child render')
    // var updateNum = () => {
    //     setNum(num+1)
    // }
  return (
    <div>
        <p>Child Component : {num}</p>
        {/* <button onClick = {() => updateNum()}></button> */}
    </div>
  )
}

export default React.memo(Child) // checks for updates , if any re-renders , if no does not re render