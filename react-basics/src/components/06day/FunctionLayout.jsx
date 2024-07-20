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
    </ul></div>
    <div className="col"><Outlet/></div>
 </div>
    
 </>
  )
}

export default FunctionLayout
