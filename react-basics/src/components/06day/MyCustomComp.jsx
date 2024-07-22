import React from 'react'

const MyCustomComp = ({type="button",cls="btn btn-primary",onClick,children,...props
}) => {
  return (
   <>
    <button type={type} className={cls}
    onClick={onClick} {...props}>{children}</button>
   </>
  )
}

export default MyCustomComp
