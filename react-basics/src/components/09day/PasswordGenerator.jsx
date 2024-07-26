import React, { useCallback, useEffect, useState } from 'react'

const PasswordGenerator = () => {
    let [length,setLength]=useState(8)
    let [passsword,setPassword]=useState('')
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let myRef = React.useRef() //Real DOM manages it
    // let randompassword=()=>{
    //     let str='abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXZY'
    //     if(numAllowed){str+='0987654321'}
    //     if(charAllowed){str+='!@#$%^&*-+_=.'}
    //     let data=''
    //     for(let i=1;i<=length;i++){
    //       data+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }

    let randompassword=useCallback(()=>{
        let str='abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXZY'
        if(numAllowed){str+='0987654321'}
        if(charAllowed){str+='!@#$%^&*-+_=.'}
        let data=''
        for(let i=1;i<=length;i++){
          data+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(data)
    },[length,numAllowed,charAllowed])

    useEffect(()=>{randompassword()},[length,numAllowed,charAllowed])
    let handleCopy=()=>{
        myRef.current.select()
        // myRef.current.setSelectionRange(0,5)
        // myRef.current.style.color='red'
        window.navigator.clipboard.writeText(myRef.current.value)
    }
  return (
    <div className='container col-6 mt-5'>
        <div className="input-group">
            <input type="text" className='form-control'  value={passsword} ref={myRef}/>
            <button type="button" class="btn btn-primary" onClick={handleCopy}>Copy  </button>           
        </div>
        <input type="range" name="length" value={length} onChange={(e)=>setLength(e.target.value)}
        min='4' max='100' /> <label className='me-3'>(length:{length})</label>
        <input type="checkbox" name="numAllowed" 
        onClick={(e)=>setNumAllowed(!numAllowed)}/><label  className='me-3'>Numbers</label>
        <input type="checkbox" name="charAllowed"
        onClick={(e)=>setCharAllowed(!charAllowed)}/> Special Char 
    </div>
  )
}

export default PasswordGenerator
