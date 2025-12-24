function Child1(props) {
    return (<>
        <p>Child1</p>
        <button onClick={()=> props.getData("i am from Child")}>Click here to send Data to Parent</button>
     </>)
}

export default Child1;