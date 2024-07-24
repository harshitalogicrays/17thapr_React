import React from 'react'

const CounterChildren = ({fun}) => {
  return (
  <>
    <button type="button" class="btn btn-primary me-3" onClick={()=>fun(1)} >
        Increase by 1  </button>
    <button type="button" class="btn btn-primary" onClick={()=>fun(5)}>
        Increase by 5
    </button>
  </>
  )
}

export default CounterChildren
