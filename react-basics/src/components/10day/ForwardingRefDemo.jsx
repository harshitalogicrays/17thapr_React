import React from 'react'
import videppath from '../../assets/dummy.mp4'
const ForwardingRefDemo =React.forwardRef((props,ref)=>{
    return(
       <>
        {/* {props.demo}<br/> */}
        <br/>
       <video style={{width:'400px'}} ref={ref}>
        <source src={videppath} />
       </video>
       </> 
    )
})

export default ForwardingRefDemo
