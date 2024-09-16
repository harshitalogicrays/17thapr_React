import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../redux/userSlice'

const Home = () => {
  // const users = useSelector(state=>state.user.users)
  const users = useSelector(selectUsers)
  console.log(users)
  return (
  <div className='m-20'>
    <h1>Home Page</h1>

    <table class="table-auto border-2 bg-slate-600 text-white text-2xl">
  <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Email</th>
      <th>Password</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
  <tr className="border-2">
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
  </tbody>
</table>

  </div>
  )
}

export default Home
