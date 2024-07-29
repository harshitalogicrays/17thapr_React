import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
    let [count,setCount]=useState(1)  
    let getCount=()=>setCount(count+1)   
    let countNumbers=(num)=>{
        console.log(":countNumber")
        for(let i=0;i<=1000000000;i++){}
        return num
    }
    // const checkData = countNumbers(count)
    const checkData = useMemo(()=>{return countNumbers(count)},[count])

    let [item,setItem] =useState(false)
  return (
   <>
    <button type="button" class="btn btn-primary me-2" onClick={getCount}> Counter </button>
    <h1>{checkData}</h1>
    <button type="button" class="btn btn-primary me-2" 
    onClick={()=>setItem(!item)}> {item ? "clicked" :"Not clicked"} </button>
    
   </>  )
}

export default UseMemoDemo
