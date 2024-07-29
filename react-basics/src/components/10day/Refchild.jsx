import React from 'react'

const Refchild = ({innerRef}) => {
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={()=>innerRef.current.focus()}> Focus Data </button>
    
    </div>
  )
}

export default Refchild
