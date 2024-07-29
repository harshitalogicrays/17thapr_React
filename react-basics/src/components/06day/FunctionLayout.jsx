import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import cssmodule from '../../App.module.css'
const FunctionLayout = () => {
    let cssvar= {color:'brown',border:'2px solid blue'}
  return (
 <>
 {/* <h1 style={cssvar} className={`App ${cssmodule.App1}`}>Function Components</h1> */}
 <div className="row">
    <div className="col-3"><ul class="nav flex-column">
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to='/fun'>Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/form'>Form Validation</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/statedemo'>State Demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/list'>List Rendering</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/products'>Products</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/styled'>Styled Components</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/customcomp'>Custom Component</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/hookform'>React Hook Form</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/liftingthestateup'>liftingthestateup</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/password'>useEffect, UseCallback and useRef Demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/refdemo'>refDemo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/fun/usememo'>udememo</Link>
        </li>
    </ul></div>
    <div className="col"><Outlet/></div>
 </div>
    
 </>
  )
}

export default FunctionLayout
