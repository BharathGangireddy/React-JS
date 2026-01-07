import React, { useMemo, useState } from 'react'

function HeavyCalculations() {
    var [count , setCount] = useState(0)
    var [num , setNum] = useState(10);

 
    console.log('Heavy render')

    const updateCount = () => {
        setCount(count+1)
    }

    function factorial(num) {
        console.log('Factorial Calculation')
    if (num < 0) return undefined;

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
        return fact;
    }   

    const fact = useMemo(() => (factorial(num)) , [num])
    console.log(fact)
    

    const updateNumber = () => {
        setNum(num+1)
    }

  return (
    <div>
        <h1>HeavyCalculations</h1>
        <h1>count : {count}</h1>
        <button onClick={() => updateCount()}>update Count</button>
        <h1>Fact : {fact}</h1>
        <button onClick={() => updateNumber()}>update number</button>
    </div>
  )
}

export default HeavyCalculations