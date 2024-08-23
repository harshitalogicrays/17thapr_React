import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AddSlider = () => {
    let [slider,setSlider]=useState({title:'',desc:'',isActive:false,image:''})
    let handleImage=(e)=>{}
    let handleSubmit=async(e)=>{
        e.preventDefault()
    }
  return (
    <Card className='mt-4'>
            <Card.Header>
                <h1>Add Slider
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/view/slider'>View Slider</Link>
                </h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" value={slider.title} 
                        onChange={(e)=>setSlider({...slider,title:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="desc" value={slider.desc} 
                        onChange={(e)=>setSlider({...slider,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={handleImage} ></Form.Control>
                    </Form.Group>
                    <br/>
                    <div class="form-check-inline mb-3">                
                    <label class="form-check-label me-2">status: </label>
                    <input class="form-check-input" type="radio" name="isActive" 
                         onClick={(e)=>setSlider({...slider,isActive:!slider.isActive})} 
                         checked={slider.isActive}
                   />
                    </div><br/>
                    <Button type="submit">Add </Button>
                </Form>
            </Card.Body>
        </Card>
  )
}

export default AddSlider
