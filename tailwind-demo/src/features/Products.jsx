import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductItem from './ProductItem'

const Products = () => {
    let [products,setProducts]=useState([])

    let getProducts=async()=>{
        try{
            let res = await fetch('https://dummyjson.com/products')
            let data = await res.json()
            // console.log(data.products)
            setProducts(data.products)
        }
        catch(err){
            toast.error(err.message)
        }
    }
    useEffect(()=>{getProducts()},[])
  return (
    <>
        <ProductItem products={products}/>
    </>
  )
}

export default Products
