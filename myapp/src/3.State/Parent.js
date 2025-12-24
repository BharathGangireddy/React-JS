import Child from "./Child";

function Parent() {
    
    //State : Local State :: To hold the data in memory and to re-render the component
   


    // var x = [ ] // Stores data in memory
    // var changeX = (data) =>{   
    //     x = data                
    //     console.log(x);
    // } 
    // console.log("re-render");    


    // fetch('https://jsonplaceholder.typicode.com/posts') // Promise Object which holds the future value. 
    // .then((response) => {return response.json()}) // converting to readable Stream
    // .then((data) =>{
    //     console.log(data) // waits until Conversion   
    //     changeX(data)
    // })

    return (
      <div>
          <h1>Parent : {x}</h1> {/* x is accessed by memory */}  {/* initial Render */}
          <button onClick={changeX}>update x</button>
          <Child />
      </div>
    )
}

export default Parent

