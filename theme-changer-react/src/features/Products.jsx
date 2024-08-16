import React from 'react'
import allproducts from '/src/assets/productdata.jsx'
import ProductList from './ProductList.jsx'
const Products = () => {
  return (
   <>
    <ProductList products={allproducts}/>
   </>
  )
}

export default Products
