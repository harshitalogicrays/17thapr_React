import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Card, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
const ViewCategory = () => {
  let [categories,setCategories]=useState([])
  let getCategories =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/categories`)
      let data=await res.json()
      setCategories(data)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getCategories() },[])

  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
      try{
        await fetch(`${import.meta.env.VITE_URL}/categories/${id}`,{
         method:"DELETE",
         headers:{'content-type':'application/json'}
        })
        getCategories()
        toast.success("category deleted")
        }
        catch(err){ toast.error(err.message)    }
    } }
  return (
    <>  <Card className='mt-4'>
            <Card.Header>
                <h1>View Categories 
                    <Link type="button" class="btn btn-primary float-end btn-lg "  
                    to='/admin/add/category'>Add Category</Link>
                </h1>
            </Card.Header>
            <Card.Body>
            <Table>
        <thead>
        <tr>
        <th>Sr. No</th>
        <th>ID</th>
        <th>Name</th>
        <th>Desc</th>
        <th>status</th>
        <th>Action</th>
        </tr></thead>
      <tbody>
        {categories.length==0 && <tr><td colSpan={6}>No Category found</td></tr>}
        {categories.map((c,i)=>
        <tr key={c.id}>
          <td>{i+1}</td>
          <td>{c.id}</td>
          <td>{c.name}</td>
          <td>{c.desc}</td>
          <td>{c.isActive ?  <span class="badge rounded-pill text-bg-success" >IN Stock</span  > : <span class="badge rounded-pill text-bg-danger" >Out of Stock</span  >}</td>
          <td>
            <Link type="button"  class="btn btn-success me-2" to={`/admin/edit/category/${c.id}`}> 
            
            <FaPenAlt/>  </Link>
            <button type="button"  class="btn btn-danger" onClick={()=>handleDelete(c.id)}><FaTrashAlt/>  </button>
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

export default ViewCategory
