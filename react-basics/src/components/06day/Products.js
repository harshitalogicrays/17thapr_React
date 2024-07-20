import React from 'react'
import allproducts from '../../assets/products.js'
import ProductList from './ProductList.jsx'
const Products = () => {
  return (
   <>
    <ProductList products={allproducts}/>
   </>
  )
}

export default Products
