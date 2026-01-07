import React, { useState, useMemo, useCallback } from 'react'

import Child from './Child'
import HeavyCalculations from './HeavyCalculations'

function Parent() {
    console.log('Parent render')

    const [count , setCount]  = useState(0)
    const updateCount = () => {
        setCount(count+1)
    } 

    /////React.memo() -> can handle unnecessary child re-renders
        // useState() --> Hook holds the value and same reference memeory address of (Reference datatypes) between re-renders
        // const [number , setNumber] = useState(1)
        // const [name , setname] = useState('Bharath')
        const [obj , setObj] = useState({name : 'Bharath'})
        const [arr , setArr] = useState([1,2,3,4])
        const [fun , setFun] = useState(() => {return "Hello"})
     

    //Inline Values 
    //(for Primitives --> data is stored by Value, so ****React.memo()**** controls the unnecessary re-renders)
        //const num = 100;
        //const string = "Bharath"
    // For Reference --> data is stored is stored by referece,  so here "React.memo()" do not control un-necessary re-renders
    // we have to useMemo() hook for ARRAYS AND OBJECTS to memoize them
        //const object ={}
        // const memoizedObject = useMemo(() => {
        //     return {name : 'Bharath'}
        // }, [])
        // const array = []
        // const memoizedArray = useMemo(() => {
        //     return []
        // }, [])
    
    // FOR FUNCTIONS usecallback() hooks are used to memoize functions
        // const fun = () => {console.log('Hello')}
        // const memoizeFun = useCallback(
        //   () => {
        //     console.log('Hello')
        //   },
        //   [],
        // )

    //COMPUTED VALUES 
    // var computedValue = number + 1
    // var computedString = name + " Raju"

    // var computedObj = {name : obj.name}
    // var memoizedObject = useMemo(()=> ({name : obj.name}) , [obj.name]) // memoize the reference address every time

    // var computedArray = [...arr, 5,6,7]
    // var memoizedArray = useCallback(() => (
    //      [...arr, 5,6,7]
    // ) , [arr])

    // const computedFunction  = ()=>{console.log('Hello' , obj.name)}
    // const memoizedFunction = useCallback(()=> {
    //     console.log('Hello' , obj.name)
    // }, [])

    // useCallback and useMemo holds the same memory address to prevent from unnecessary re -renders
    // it changes when the setter function gets updated

    //Object update 

   const updateName = () =>{
        setObj((preValue)=> ({ // Object update
            ...preValue ,
            name : "Reddy" ,
            age : 40
        }))
    }

    const memoizeObj = useCallback(() =>{
        setObj((preValue)=> ({ // Object update
            ...preValue ,
            name : "Reddy" ,
            age : 40
        }))
    }, [obj])


    const updateArrayValue = () => {
        setArr([...arr , 23,56,76])   
    }

    const memoizeArray  = useCallback(() => {
        setArr([...arr , 23,56,76])   
    },arr)



  return (
    <div>
        {/* <h2>Parent : {count}</h2>
        <button onClick={updateCount}>update count</button> */}

       
        {/* <Child count = {count}/> */}

        {/* <Child computedFunction = {computedFunction}/> */}
        {/* <Child memoizedFunction = {memoizedFunction}/> */}

        {/* <Child memoizeFun = {memoizeFun} /> */}
        {/* <Child num = {computedValue}/> */}
        {/* <Child str = {computedString} /> */}
      
        {/* <Child obj = {computedObj} /> */}
        {/* <Child memoizedObject = {memoizedObject} /> */}

        {/* <Child computedArray = {computedArray}/> */}
        {/* <Child  memoizedArray = {memoizedArray} /> */}

        {/* <Child num = {number} /> */}
        {/* <Child obj = {obj}/> */}    
        {/* <Child arr = {arr}/> */}
        {/* <Child fun = {fun}/> */}

        {/* <Child num = {num}/> */}
        {/* <Child string = {string} /> */}

        {/* <Child object = {Object} />
        <Child memoizedObject = {memoizedObject} /> */}

        {/* <Child array = {array} />
        <Child memoizedArray = {memoizedArray} /> */}
        
        {/* <Child fun = {fun} /> */}
        {/* <Child memoizeFun = {memoizeFun} /> */}

       {/* <h1>name : {obj.name}</h1>
       <button onClick = {() => updateName()}>updateName</button>
       <Child  objName = {obj} /> */}
    {/* 
       <h1>array : {arr.join(',')}</h1>
       <button onClick = {() => updateArrayValue()}>updateName</button>
       <Child num = {arr.join(',')} /> */}
         
    {/* <Child x = {memoizeObj}/> */}
    {/* <Child x = {memoizeArray}/> */}
    <HeavyCalculations />
    </div>
  )
}

export default Parent
