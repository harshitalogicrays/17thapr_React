import React from 'react'

const CounterApp = () => {
    // let count =1
    let [count,setCount] = React.useState('')
    let handleClick=()=>{
        // setCount(parseInt(count+1)) //count +=1
        setCount((prevCount)=>parseInt(prevCount+1))
        console.log(count)
    }
  return (
    <>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Counter</button>
        <h1>{count}</h1>
        
    </>
  )
}

export default CounterApp
