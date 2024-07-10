// import React from 'react'

// const Propsinfundemo = (props) => {
//     console.log(props)
//   return (
//     <div>
//     <h1>Props demo</h1>
//     <h3>{props.username}</h3>
//     </div>
//   )
// }

// export default Propsinfundemo


import React from 'react'

const Propsinfundemo = ({username,address,mobile}) => { //let {username,address,mobile}=props
  return (
    <div>
      <h1>{username}</h1>
      <h2>{address}</h2>
    </div>
  )
}

export default Propsinfundemo
