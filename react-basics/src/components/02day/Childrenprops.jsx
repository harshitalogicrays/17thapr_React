import React from 'react'

const Childrenprops = (props) => {
    console.log(props)
    // props.empid = 1200
  return (
    <>
      {/* {props.children} */}
      {props.children[0]}
      {props.empid}
    </>
  )
}

export default Childrenprops


// import React from 'react'

// const Childrenprops = ({empid,children}) => {
//   return (
//     <>
//       {children[0]}
//       {empid}
//     </>
//   )
// }

// export default Childrenprops