import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row,Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const AddProduct = () => {
    const redirect = useNavigate()
    let initialvalues = {category:'',name:'',brand:'',stock:'',price:'',images:[],desc:''}
    const [product,setProduct]=useState({...initialvalues})

    const [oldImages,setOldImages]=useState([])
    let [categories,setCategories]=useState([])
    let getCategories =async()=>{
        try{
        let res = await fetch(`${import.meta.env.VITE_URL}/categories`)
        let data=await res.json()
        setCategories(data)  }
        catch(err){ toast.error(err.message)  }}

    useEffect(()=>{ getCategories() },[])

    let arr = []
    let handleImage=(e)=>{ 
        let images =e.target.files
        // console.log(images)
        Array.from(images).forEach((file,i)=>{
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload=()=>{
             setOldImages((prev)=>[...prev , reader.result])  
        }
        })
    } 
    
    //edit
    let {id} = useParams() //destructure 
    let [oimages,setOImages]=useState([])
    let getDataByID=async()=>{
        try{
            let res = await fetch(`${import.meta.env.VITE_URL}/products/${id}`)
            let data=await res.json()
            setProduct(data)
            setOImages(data.images)
        }
            catch(err){ toast.error(err.message)  }
    }
    useEffect(()=>{
        if(id){getDataByID()}
        else setProduct({...initialvalues})
    },[id])


    let handleSubmit=async(e)=>{
        console.log(oldImages)
        e.preventDefault()
       if(!id){
        try{
            await fetch(`${import.meta.env.VITE_URL}/products`,{
               method:"POST",
               headers:{'content-type':'application/json'},
               body:JSON.stringify({...product,images:oldImages,createdAt:new Date()})
             })
             toast.success("product added")
             redirect('/admin/view/product')
          }
          catch(err){
             toast.error(err.message)
          }
       }
       else {
        let updatedImages = [...oimages , ...oldImages]
        try{
            await fetch(`${import.meta.env.VITE_URL}/products/${id}`,{
               method:"PUT",
               headers:{'content-type':'application/json'},
               body:JSON.stringify({...product,images:updatedImages,createdAt:product.createdAt,editedAt:new Date()})
             })
             toast.success("product updated")
             redirect('/admin/view/product')
          }
          catch(err){
             toast.error(err.message)
          }
       }
    }

    let removeImage=(index)=>{
        let arrimg = [...oimages]
        arrimg.splice(index,1)
        setOImages([...arrimg])
    }

  return (
    <Container className='shadow mt-2 p-2'>
    <h1>{id ?"Edit  " :"Add "} Product</h1> <hr/>
   <Form onSubmit={handleSubmit}>
       <Form.Group className='mb-2'>
           <Form.Label >Category</Form.Label>
           <Form.Select name="category" onChange={(e)=>setProduct({...product,category:e.target.value})} value={product.category}>
               <option value='' selected disabled>choose category</option>
               {categories.map((c,i)=><option key={i}>{c.name}</option>)}
           </Form.Select>
       </Form.Group>
       <Row>
           <Col> <Form.Group  className='mb-2'>
           <Form.Label>Name</Form.Label>
           <Form.Control name="name" onChange={(e)=>setProduct({...product,name:e.target.value})} value={product.name}></Form.Control>
       </Form.Group></Col>
       <Col> <Form.Group  className='mb-2'>
           <Form.Label>Brand</Form.Label>
           <Form.Control name="brand" onChange={(e)=>setProduct({...product,brand:e.target.value})} value={product.brand}></Form.Control>
       </Form.Group></Col>
       </Row>
       <Row>
           <Col> <Form.Group  className='mb-2'>
           <Form.Label>Price</Form.Label>
           <Form.Control type="number" name="price" onChange={(e)=>setProduct({...product,price:e.target.value})} value={product.price}></Form.Control>
       </Form.Group></Col>
       <Col> <Form.Group  className='mb-2'>
           <Form.Label>stock</Form.Label>
           <Form.Control name="stock" type="number" onChange={(e)=>setProduct({...product,stock:e.target.value})} value={product.stock}></Form.Control>
       </Form.Group></Col>
       </Row>
       <Form.Group className='mb-2'>
           <Form.Label>Choose File</Form.Label>
           <Form.Control type="file" name="image" multiple onChange={handleImage}></Form.Control>
       </Form.Group>
        {id && <>
            {product.images.length != 0 && <>
                {oimages.map((img,i)=><Fragment key={i}><img src={img} className="me-2" height={100} width={100} /> <span style={{position:'relative',top:'-40px',left:'-15px',cursor:'pointer'}} onClick={()=>removeImage(i)}>X</span> </Fragment>)}
            </>}
        </>}
       <Form.Group className='mb-2'>
           <Form.Label>Description</Form.Label>
           <Form.Control as="textarea" name="desc" onChange={(e)=>setProduct({...product,desc:e.target.value})} value={product.desc}></Form.Control>
       </Form.Group>
       <Button type="submit">{id ? "Update " : "Add"} Product</Button>
   </Form>
</Container>
  )
}

export default AddProduct
