import React, { useEffect, useState } from 'react'
import ProductList from './ProductList.jsx'
const Products = () => {
  let [products,setProducts]=useState([])
  let getProducts =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/products`)
      let data=await res.json()
      setProducts(data)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getProducts() },[])
  return (
   <>
    <ProductList products={products}/>
   </>
  )
}

export default Products
