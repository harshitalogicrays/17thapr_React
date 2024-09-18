import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_USER, selectUsers } from '../redux/userSlice'
import { TrashIcon } from '@heroicons/react/16/solid'

const Home = () => {
  // const users = useSelector(state=>state.user.users)
  const dispatch=useDispatch()
  const users = useSelector(selectUsers)
  console.log(users)
  // const [users,setUsers]=useState([])

  // useEffect(()=>{
  //   dispatch(fetchUserToAPI())
  //   setUsers(allusers)
  // },[users])

  return (
  <div className='m-20'>
    <h1>Home Page</h1>

    <table class=" border-2  border-collapse bg-slate-600 text-white text-2xl">
  <thead>
    <tr>
      <th className="border border-gray-300 px-4 py-2">ID</th>
      <th className="border border-gray-300 px-4 py-2">Username</th>
      <th className="border border-gray-300 px-4 py-2">Email</th>
      <th className="border border-gray-300 px-4 py-2">Password</th>
      <th className="border border-gray-300 px-4 py-2">Remove</th>
    </tr>
  </thead>
  <tbody>
    {users.length==0  && <tr><td colSpan={5} className="border border-gray-300 px-4 py-2">No User  found</td></tr>}
    {users.map((user,i)=>
  <tr className="border-2" key={i}>
      <td className="border border-gray-300 px-4 py-2">{user.id}</td>
      <td className="border border-gray-300 px-4 py-2">{user.username}</td>
      <td className="border border-gray-300 px-4 py-2">{user.email}</td>
      <td className="border border-gray-300 px-4 py-2">{user.password}</td>
      <td className="border border-gray-300 px-4 py-2">
        <button type="button" className='text-red-700 w-8' 
        onClick={()=>dispatch(REMOVE_USER(user.id))}>  
          <TrashIcon/></button>
       
      </td>
    </tr>)}
  </tbody>
</table>

  </div>
  )
}

export default Home
