import React, { useState } from 'react'
import Image1 from '/src/assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  let [user,setUser]=useState({username:'',email:'',password:'',cpassword:'',role:'1'})
  let [unamerr,setUnamerr]=useState('')
  let [emailerr,setEmailerr]=useState('')
  let [pwderr,setPwderr]=useState('')
  let [cpwderr,setCpwderr]=useState('')  
  const redirect = useNavigate()
  let handleSubmit=async(e)=>{
      e.preventDefault()
      let unameerr = checkuname()
      let emailerr = checkemail() 
      let pwderr = checkpwd()
      let cpwderr = checkcpwd()
      if(unameerr && emailerr && pwderr && cpwderr){
         //data post 
         try{
           await fetch(`${import.meta.env.VITE_URL}/users`,{
              method:"POST",
              headers:{'content-type':'application/json'},
              body:JSON.stringify({...user,createdAt:new Date()})
            })
            toast.success("Registered Successfully")
            redirect('/login')
         }
         catch(err){
            toast.error(err.message)
         }
      }
      else e.preventDefault()
}   
     

  let checkuname = ()=>{
      if(user.username==''){
         setUnamerr("Username is required")
         return false
      }
      else{setUnamerr("");return true}
  }
  let checkemail = ()=>{
      let pattern=/^[\w\!\#\$\%\&\*\_\.]+\@[\w]+\.[a-zA-Z]{3}$/
      if(user.email==''){
          setEmailerr("email is required");return false
      }
      else if(!pattern.test(user.email)){
          setEmailerr("Invalid Email");return false
      }
      else{ setEmailerr("");return true}
  }

  let checkpwd = ()=>{
      if(user.password==''){
          setPwderr("password is required");return false
      }
      else{ setPwderr("");return true}
  }
  let checkcpwd = ()=>{
      if(user.cpassword=='' || user.cpassword != user.password){
          setCpwderr("password not match");return false
      }
      else{ setCpwderr("");return true}
  }


return (
  <div className='mt-5 shadow'>
      <div className="row">
          <div className="col">
                  <img src ={Image1} className='img-fluid'/>
          </div>
          <div className="col">
              <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                      <label for="" class="form-label">Username</label>
                      <input type="text" name="username" class="form-control" 
                      value={user.username} 
                      onChange={(e)=>setUser({...user,username:e.target.value})}
                      onBlur={checkuname}/>
                  </div>
                  {unamerr && <span className='text-danger'>{unamerr}</span>}
                  <div class="mb-3">
                      <label for="" class="form-label">Email</label>
                      <input type="text" name="email" class="form-control" 
                       value={user.email} 
                       onChange={(e)=>setUser({...user,email:e.target.value})}
                       onBlur={checkemail}/>
                  </div>
                  {emailerr && <span className='text-danger'>{emailerr  }</span>}
                  <div class="mb-3">
                      <label for="" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" 
                       value={user.password} 
                       onChange={(e)=>setUser({...user,password:e.target.value})}
                       onBlur={checkpwd}/>
                      
                  </div>
                  {pwderr && <span className='text-danger'>{pwderr  }</span>}
                  <div>
                      <label for="" class="form-label">Confirm Password</label>
                      <input type="password" name="cpassword" class="form-control" 
                       value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}
                       onBlur={checkcpwd}/>
                  </div>
                  {cpwderr && <span className='text-danger'>{cpwderr  }</span>}<br/>
                  <button type="submit" class="btn btn-primary" > Submit </button>
                  
              </form>
              <p>Already an account?? <Link to='/login'>SignIn</Link></p>
          </div>
      </div>
  </div>
)
}

export default Register
