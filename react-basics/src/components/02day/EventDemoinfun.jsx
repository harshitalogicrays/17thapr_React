import React from 'react'

const EventDemoinfun = () => {
    let handleButton=()=>{
        alert("handlebutton clicked")
    }
    let handleButton1=(a,b)=>{
        alert(a+b)
    }
  return (
   <>
    <button type="button" class="btn btn-primary me-2" onClick={()=>alert("button clicked")}>Click Me</button>
    <button type="button" class="btn btn-primary me-2" onClick={handleButton}>Click Me</button>
    <button type="button" class="btn btn-primary me-2" onClick={()=>handleButton()}>Click Me</button>
    <button type="button" class="btn btn-primary me-2" onClick={()=>handleButton1(2,3)}>Click Me</button>
   </>
  )
}

export default EventDemoinfun
