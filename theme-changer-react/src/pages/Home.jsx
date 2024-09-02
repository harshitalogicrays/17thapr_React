import React from 'react'
import Slider from './Slider'
import { useMyContext } from '../features/CartContext'

const Home = () => {
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
