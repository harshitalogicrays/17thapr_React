import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const ViewProduct = () => {
  let [products,setProducts]=useState([])
  let getProducts =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/products`)
      let data=await res.json()
      setProducts(data)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getProducts() },[])
  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
      try{
        await fetch(`${import.meta.env.VITE_URL}/products/${id}`,{
         method:"DELETE",
         headers:{'content-type':'application/json'}
        })
        getProducts()
        toast.success("product deleted")
        }
        catch(err){ toast.error(err.message)    }
    } }
    return (
   <>
    <h1>View Product</h1>
    <Table>
      <thead><tr><th>Sr. No</th><th>Name</th>
      <th>Image</th>
      <th>Category</th>
      <th>brand</th>
      <th>stock</th>
      <th>price</th>
      <th>Action</th>
      </tr></thead>
      <tbody>
        {products.length==0 && <tr><td colSpan={8}>No Product Found</td></tr>}
        {products.map((product,i)=>
        <tr key={i}>
          <td>{i+1}</td>
          <td>{product.name}</td>
          <td><img src={product.images[0]} height={50} width={50}/></td>
          <td>{product.category}</td>
          <td>{product.brand}</td>
          <td>{product.stock > 0 ?  <span class="badge rounded-pill text-bg-success" >IN Stock</span  > : <span class="badge rounded-pill text-bg-danger" >Out of Stock</span  >}</td>
          <td>{product.price}</td>
          <td>
            <Link type="button"  class="btn btn-success me-2" to={`/admin/edit/product/${product.id}`}> 
            
            <FaPenAlt/>  </Link>
            <button type="button"  class="btn btn-danger" onClick={()=>handleDelete(product.id)}><FaTrashAlt/>  </button>
          </td>
        </tr>)}
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
