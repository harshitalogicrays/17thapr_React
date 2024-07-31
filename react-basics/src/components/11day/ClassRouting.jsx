import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ClassRouting = () => {
  return (
    <div className="row">
    <div className="col-3"><ul class="nav flex-column">
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to='/class'>Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" aria-current="page" to='/class/propevent'>Prop event Demo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" aria-current="page" to='/class/state'>StateDemo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" aria-current="page" to='/class/form'>Form demo</Link>
        </li>
    </ul></div>
    <div className="col"><Outlet/></div>
 </div>
    
  )
}

export default ClassRouting
