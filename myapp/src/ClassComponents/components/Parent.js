import React from "react"
import Child from "../Props/Child"

class Parent extends React.Component{
         constructor() {
            super() // calls Parent constructore Function 
            this.state = {
                count : 10
            }
        }
    render() {
        
        console.log("12")
        return(
            <>
            <h1>I am a Class Component : {this.count} </h1>
            </>
        )
    }
}

export default Parent