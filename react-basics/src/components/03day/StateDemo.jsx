import React, { useState } from 'react'

const StateDemo = () => {
    let [num1] =useState(10)
    let [num2] = useState(20)
    let [result,setResult]=useState('')
    let [isActive]=useState(true)
    let [hobbies]=useState([])
    let [address]=useState({city:'',state:'',country:''})
    let [products]=useState([{},{},{}])
    let addNumbers=()=>{
        setResult(num1+num2)
    }
  return (
    <>
   <button type="button" class="btn btn-primary" onClick={addNumbers}>Add Numbers</button>
   <h2>Result : {result}</h2>
   </>
  )
}

export default StateDemo
