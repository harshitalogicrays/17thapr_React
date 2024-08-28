import React, { useEffect, useState } from 'react'
import {  Card, Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const ViewSlider = () => {
  let [sliders,setSliders]=useState([])
  let getSliders =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/sliders`)
      let data=await res.json()
      setSliders(data)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getSliders() },[])

  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
      try{
        await fetch(`${import.meta.env.VITE_URL}/sliders/${id}`,{
         method:"DELETE",
         headers:{'content-type':'application/json'}
        })
        getSliders()
        toast.success("slider deleted")
        }
        catch(err){ toast.error(err.message)    }
    } }
    return (
      <>
        <Card className='mt-4'>
              <Card.Header>
                  <h1>View Slider 
                      <Link type="button" class="btn btn-primary float-end btn-lg "  
                      to='/admin/add/slider'>Add Slider</Link>
                  </h1>
              </Card.Header>
              <Card.Body>
              <Table>
          <thead>
          <tr>
          <th>Sr. No</th>
          <th>Title</th>
          <th>Image</th>
          <th>Desc</th>
          <th>status</th>
          <th>Action</th>
          </tr></thead>
          <tbody>
        {sliders.length==0 && <tr><td colSpan={6}>No slider found</td></tr>}
        {sliders.map((s,i)=>
        <tr key={s.id}>
          <td>{i+1}</td>
          <td>{s.title}</td>
          <td><img src={s.image} widht={50} height={50} /></td>
          <td>{s.desc}</td>
          <td>{s.isActive ?  <span class="badge rounded-pill text-bg-success" >IN Stock</span  > : <span class="badge rounded-pill text-bg-danger" >Out of Stock</span  >}</td>
          <td>
            <Link type="button"  class="btn btn-success me-2" to={`/admin/edit/slider/${s.id}`}> 
            
            <FaPenAlt/>  </Link>
            <button type="button"  class="btn btn-danger" onClick={()=>handleDelete(s.id)}><FaTrashAlt/>  </button>
          </td>
          
        </tr>
        )}
      </tbody>
      </Table>
              </Card.Body>
          </Card>
       
      </>
  
  )
}

export default ViewSlider
