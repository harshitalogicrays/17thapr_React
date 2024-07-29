import React, { useEffect, useRef } from 'react'
import Refchild from './Refchild'
import ForwardingRefDemo from './ForwardingRefDemo'

const Refdemo = () => {
    const myRef=React.useRef()
    const focusRef=useRef()
    const forwardMyRef=useRef()
    let handleFetch=()=>{
        myRef.current.style.color="blue"
        alert(myRef.current.value)
        focusRef.current.value = "hello"
    }
    // useEffect(()=>{
    //     focusRef.current.focus()},[])
  return (
   <> <input type="text" name="txt" className='form-control' ref={myRef}/>
    <button type="button" class="btn btn-primary" onClick={handleFetch}> Fetch Data </button>
    <br/>
    <input type="text" name="txt" className='form-control' ref={focusRef}/><br/>
    {/* <Refchild innerRef={focusRef}/> */}

    <button type="button" class="btn btn-primary me-2" onClick={()=>forwardMyRef.current.play()}> Play </button>
    <button type="button" class="btn btn-primary" onClick={()=>forwardMyRef.current.pause()}> Pause </button>
    <ForwardingRefDemo demo="ref demo" ref={forwardMyRef}/>
   </>
  )
}

export default Refdemo
