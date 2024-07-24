import React from 'react'
import CounterChildren from './CounterChildren'
import { Container } from 'react-bootstrap'

const Counter1 = () => {
    let [count,setCount] = React.useState(0)
    let handleClick=(c)=>{
       setCount((prevCount)=>parseInt(prevCount+c))
    }
  return (
    <Container className="mt-5">  
       
        <CounterChildren fun={handleClick}/>
        <h1>{count}</h1>
        
    </Container>
  )
}

export default Counter1
