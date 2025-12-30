import React, { useState } from 'react'

function Parent() {
    var arrayOfItems = [
        {id : 1 , name : "sugar" , quantity : 10},
        { id : 2 , name : "salt" , quantity : 5},
        {id : 3 , name : "rice" , quantity : 2},
        {id : 4 , name : "wheat" , quantity : 8},
        {id : 5 , name : "oil" , quantity : 1},
 ]

 let [ItemList] = useState(arrayOfItems)

  return (
    <div>
        {ItemList.map(eachItem => {
            return <React.Fragment key = {eachItem.id}>
            <p>ItemName : {eachItem.name}  QTY : {eachItem.quantity}</p>
           </React.Fragment>
        })}
    </div>
  )
}

export default Parent