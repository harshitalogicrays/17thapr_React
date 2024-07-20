import React from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'

const ProductList = ({products}) => {
  return (
    <div className='container'>
        {products.length ==0 && <h1>No product found</h1>}
        <Row>
                {products.map((product)=><ProductCard key={product.id} product={product}/>)}
        </Row>
    </div>
  )
}

export default ProductList
