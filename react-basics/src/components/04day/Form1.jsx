import React, { useState } from 'react'
import Image1 from '../../assets/register.png'
const Form1 = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
    let handleChange=(e)=>{
        setUser({...user , [e.target.name]:e.target.value})
        // console.log(e.target.value)
    }
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col">
                    <img src ={Image1} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="" class="form-label">Username</label>
                        <input type="text" name="username" class="form-control" 
                        value={user.username} onChange={handleChange}/>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email" class="form-control" 
                         value={user.email} onChange={handleChange}/>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" 
                         value={user.password} onChange={handleChange}/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input type="password" name="cpassword" class="form-control" 
                         value={user.cpassword} onChange={handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary" > Submit </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form1
