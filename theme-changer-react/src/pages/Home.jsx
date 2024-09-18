import React from 'react'
import Slider from './Slider'
import { useMyContext } from '../features/CartContext'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const {products} = useOutletContext()
  console.log(products)
  const data = useMyContext()
  console.log(data)
  return (
 <>
    <Slider/>
    <h1>Home Page</h1>
 </>
  )
}

export default Home
