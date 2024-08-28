import React, {useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
    const redirect=useNavigate()
    let [category,setCategory]=useState({name:'',desc:"",isActive:false})

    //edit 
    let {id} = useParams() //destructure 
    let getDataByID=async()=>{
        try{
            let res = await fetch(`${import.meta.env.VITE_URL}/categories/${id}`)
            let data=await res.json()
            setCategory(data)  }
          catch(err){ toast.error(err.message)  }
    }
    useEffect(()=>{
        if(id){getDataByID()}
        else setCategory({name:'',desc:"",isActive:false})
    },[id])

   let handleSubmit=async(e)=>{ e.preventDefault() 
    if(!id){
        try{
            await fetch(`${import.meta.env.VITE_URL}/categories`,{
               method:"POST",
               headers:{'content-type':'application/json'},
               body:JSON.stringify({...category,createdAt:new Date()})
             })
             toast.success("category added")
             redirect('/admin/view/category')
          }
          catch(err){
             toast.error(err.message)
          }
    }
    else {
        try{
            await fetch(`${import.meta.env.VITE_URL}/categories/${id}`,{
               method:"PUT",
               headers:{'content-type':'application/json'},
               body:JSON.stringify({...category,createdAt:category.createdAt,editedAt:new Date()})
             })
             toast.success("category updated")
             redirect('/admin/view/category')
          }
          catch(err){
             toast.error(err.message)
          }
    }
    }
  return (
    <>
        <Card className='mt-4'>
            <Card.Header>
                <h1>{id ? "Edit " : "Add "} Category 
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/view/category'>View Categories</Link>
                </h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={category.name}
                        onChange={(e)=>setCategory({...category,name:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="desc" value={category.desc}
                        onChange={(e)=>setCategory({...category,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <div class="form-check-inline mb-3">                
                    <label class="form-check-label me-2">status: </label>
                    <input class="form-check-input" type="radio" name="isActive" 
                    onClick={(e)=>setCategory({...category,isActive:!category.isActive})} 
                    checked={category.isActive}/>
                    </div><br/>
                    <Button type="submit">{id? "Update ":"Add"} </Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default AddCategory
