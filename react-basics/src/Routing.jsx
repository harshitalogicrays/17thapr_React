import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './components/05day/Home'
import Form2 from './components/04day/Form2'
import StateDemo from './components/03day/StateDemo'
import Pagenotfound from './components/05day/Pagenotfound'
import FunctionLayout from './components/06day/FunctionLayout'
import ListRendering from './components/06day/ListRendering'
import Products from './components/06day/Products'
import StyledCompDemo from './components/07day/StyledCompDemo'
import UseCustomComp from './components/07day/UseCustomComp'

const Routing = () => {
  return (
    <>
        <Routes>
                <Route path="/" element={<App/>}>
                  <Route path='fun' element={<FunctionLayout/>}>
                      <Route path='' element={<Home/>}/>  
                      <Route path='form' element={<Form2/>}/> 
                      <Route path='statedemo' element={<StateDemo/>}/>
                      <Route path='list' element={<ListRendering/>}/>
                      <Route path='products' element={<Products/>}/>
                      <Route path='styled' element={<StyledCompDemo/>}/>
                      <Route path='customcomp' element={<UseCustomComp/>}/>
                  </Route>                 
                </Route>

                <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
    </>
  )
}

export default Routing
