import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './components/05day/Home'
import Form2 from './components/04day/Form2'
import StateDemo from './components/03day/StateDemo'
import Pagenotfound from './components/05day/Pagenotfound'

const Routing = () => {
  return (
    <>
        <Routes>
                <Route path="/" element={<App/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='form' element={<Form2/>}/>
                    <Route path='statedemo' element={<StateDemo/>}/>
                </Route>

                <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
    </>
  )
}

export default Routing
