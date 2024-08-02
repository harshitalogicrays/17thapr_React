import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ClassRouting = () => {
  return (
    <div className="row">
    <div className="col-3"><ul class="nav flex-column">
        <li class="nav-item">
            <Link class="nav-link active"  to='/class'>Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link"  to='/class/propevent'>Prop event Demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link"  to='/class/state'>StateDemo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link"  to='/class/form'>Form demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link"  to='/class/ref'>ref demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/class/lifecycle'>LifeCycle Method</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to='/class/pure'>purecomp Method</Link>
        </li>
    </ul></div>
    <div className="col"><Outlet/></div>
 </div>
    
  )
}

export default ClassRouting
