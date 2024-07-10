import React, { useState } from 'react'

const TextBoxDemo = () => {
    const [username,setUsername]=useState("Harshita")
    const [num1,setNum1]=useState('')
    const [num2,setNum2]=useState('')
    const [result,setResult]=useState(0)
    let handleChange=(e)=>{
        console.log(e.target.value) //info about event and element 
        setUsername(e.target.value)
    }

    let handleAdd=()=>{
        setResult(parseInt(num1)+parseInt(num2))
    }
  return (
    <>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" name="username" class="form-control" value={username} 
            onChange={handleChange}/>
        </div>
        <h1>Hello {username}</h1>
        <hr/>
        <div class="mb-3">
            <label for="" class="form-label">Num1</label>
            <input type="number" name="num1" class="form-control" value={num1} 
            onChange={(e)=>setNum1(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Num2</label>
            <input type="number" name="num2" class="form-control" value={num2} 
             onChange={(e)=>setNum2(e.target.value)}/>
        </div>
        <button  type="button" class="btn btn-primary" onClick={handleAdd}>ADD </button>
            <br/>
            {result > 0 ? <p>{result}</p> : ''}
            {result > 0 && <p>{result}</p>}
    </>
  )
}

export default TextBoxDemo
