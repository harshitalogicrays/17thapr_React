import React, { useState } from 'react'
import Image1 from '../../assets/register.png'
const Form2 = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let [unamerr,setUnamerr]=useState('')
    let [emailerr,setEmailerr]=useState('')
    let [pwderr,setPwderr]=useState('')
    let [cpwderr,setCpwderr]=useState('')
    let handleSubmit=async(e)=>{
        e.preventDefault()
}   
       

    let checkuname = ()=>{
        if(user.username==''){
           setUnamerr("Username is required")
        }
        else{setUnamerr("")}
    }
    let checkemail = ()=>{
        if(user.email==''){
            setEmailerr("email is required")
        }
        else{ setEmailerr("")}
    }

    let checkpwd = ()=>{
        if(user.password==''){
            setPwderr("password is required")
        }
        else{ setPwderr("")}
    }
    let checkcpwd = ()=>{
        if(user.cpassword=='' || user.cpassword != user.password){
            setCpwderr("password not match")
        }
        else{ setCpwderr("")}
    }


    // let validations=()=>{
    //     console.log('validations');     
    //         checkuname()
    //         checkemail()         
    // }
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
                    <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input type="password" name="cpassword" class="form-control" 
                         value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}
                         onBlur={checkcpwd}/>
                    </div>
                    {cpwderr && <span className='text-danger'>{cpwderr  }</span>}<br/>
                    <button type="submit" class="btn btn-primary" > Submit </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form2
