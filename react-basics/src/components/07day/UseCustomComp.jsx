import React, { useState } from 'react'
import MyCustomComp from '../06day/MyCustomComp'

const UseCustomComp = () => {
    let [txt,setTxt]=useState('')
    let [data,setData]=useState('')
  return (
    <>
      <div class="mb-3">
        <input type="text" name="txt" value={txt} onChange={(e)=>setTxt(e.target.value)}  class="form-control"/>
        <button type="button" class="btn btn-primary" 
        onClick={()=>setData(txt)}>get text</button>
      </div>
        


    {data !='' &&   <MyCustomComp type="button" cls="btn btn-warning" onClick={()=>alert("button clicked")} disabled  name="custom">
       {data}
        </MyCustomComp>
        }
      <br/>

        <MyCustomComp type="button" style={{border:'5px solid red'}}>
        <h3>Custom Button</h3>
        </MyCustomComp>
    </>
  )
}

export default UseCustomComp
