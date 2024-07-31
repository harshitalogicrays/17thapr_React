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
import ReactHookForm from './components/08day/ReactHookForm'
import Counter1 from './components/08day/Counter1'
import PasswordGenerator from './components/09day/PasswordGenerator'
import Refdemo from './components/10day/Refdemo'
import UseMemoDemo from './components/10day/UseMemoDemo'
import ClassRouting from './components/11day/ClassRouting'
import ClassPropsEventandState from './components/11day/ClassPropsEventandState'
import Stateinclass from './components/11day/Stateinclass'
import Forminclass from './components/11day/Forminclass'

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
                      <Route path='hookform' element={<ReactHookForm/>}/>
                      <Route path='liftingthestateup' element={<Counter1/>}/>
                      <Route path='password' element={<PasswordGenerator/>}/>
                      <Route path='refdemo' element={<Refdemo/>}/>
                      <Route path='usememo' element={<UseMemoDemo/>}/>
                  </Route>  
                  <Route path='class' element={<ClassRouting/>}>
                      <Route path='propevent' element={<ClassPropsEventandState username="binjal" isActive={true}><p>child</p></ClassPropsEventandState>}/>
                      <Route path='state' element={<Stateinclass name="State Demo"/>}/>
                      <Route path='form' element={<Forminclass/>}/>
                  </Route>                                    
                </Route>

                <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
    </>
  )
}

export default Routing
