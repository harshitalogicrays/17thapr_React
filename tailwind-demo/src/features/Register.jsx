import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_USER } from '../redux/userSlice'

const Register = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
  let handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(ADD_USER(user))
    // dispatch(addUserToAPI(user))
    navigate('/')
  }
  return (
    <>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-4 tracking-tight text-gray-900"> Register Here </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input   name="username" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input   name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-3 text-gray-900">
                  Password
                </label>    
              </div>
              <div className="mt-2">
                <input name="password" type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-3 text-gray-900">
                  Confirm Password
                </label>    
              </div>
              <div className="mt-2">
                <input name="cpassword" type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
        Already an Account?{' '}
            <Link to='/login' className="font-semibold leading-2 text-indigo-600 hover:text-indigo-500">
             Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
