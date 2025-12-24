function Child(props) {
    return(
        <>
            {/* <h1>Child Element {props.getData()}</h1> */} 
            <button onClick = {()=>props.getData("child to parent data transfer")}>Click</button> 
            {/* While Calling the function the child assigns values to the Parent Component */}
        </>
    )
}
export default Child