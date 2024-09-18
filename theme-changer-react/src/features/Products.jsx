import React, { useEffect, useState } from 'react'
import ProductList from './ProductList.jsx'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_CATEGORY, FILTER_BY_PRICE, selectCatgory, selectFilterProducts, selectPrice, selectSearch } from '../redux/filterSlice.jsx'
const Products = () => {
  let [products,setProducts]=useState([])
  let getProducts =async()=>{
    try{
      let res = await fetch(`${import.meta.env.VITE_URL}/products`)
      let data=await res.json()
      setProducts(data)  }
    catch(err){ toast.error(err.message)  }}

  useEffect(()=>{ getProducts() },[])

  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const categories =Array.from(new Set(products.map((product)=>product.category)))

  const filterProducts = useSelector(selectFilterProducts)
  const searchval = useSelector(selectSearch)
  const catval = useSelector(selectCatgory)
  const priceval = useSelector(selectPrice)

  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(FILTER_BY_CATEGORY({products,category}))
  },[category])
  useEffect(()=>{
    dispatch(FILTER_BY_PRICE({products,price}))
},[price])
  return (
   <>
 <Container className="mt-5">
    <Row>
      <Col xs={3}>   
          <Form.Select value={category} name="category" onChange={(e)=>setCategory(e.target.value)}>
          <option value='' selected >select category</option>
          {categories.map((c,i)=>  <option key={i}>{c}</option>)}
        </Form.Select>
      </Col>
      <Col xs={{span:'3',offset:'6'}}>
        <Form.Select value={price} name="price" onChange={(e)=>setPrice(e.target.value)}>
        <option value='' selected>Sort By:</option>
        <option value="htol">High to Low</option>
        <option value="ltoh">Low to High</option>
      </Form.Select>
      </Col>
    </Row>  

    {(searchval!="" || catval!='' || priceval!='') ? 
    <>
      {filterProducts.length==0 ? <h1>No product found</h1> :
      <ProductList products={filterProducts}/>
      }
    </> :<ProductList products={products}/> 
    }
    

    </Container>
   </>
  )
}

export default Products
