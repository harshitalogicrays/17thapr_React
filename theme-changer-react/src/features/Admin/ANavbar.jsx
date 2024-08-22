import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ANavbar = ({toggleSideBar}) => {
    const redirect=useNavigate()
    let handleLogout=()=>{
        sessionStorage.removeItem('17aprlogin')
        toast.success("loggedOut Successfully")
        redirect('/')
      }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <span className="navbar-toggler-icon" onClick={toggleSideBar}></span>
                <Link className="navbar-brand" to='/admin'>Admin Panel</Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link">Welcome Admin</a>   </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={handleLogout}> Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default ANavbar
