import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ANavbar from './ANavbar';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen]=useState(true)
  const toggleSideBar = ()=>{setIsSidebarOpen(!isSidebarOpen)}
  const closeSidebar=()=>{ setIsSidebarOpen(false)}
  const contentStyle = {
    transition: 'margin-left 0.3s',
    marginLeft: isSidebarOpen ? '250px' : '0',
  };
  return (
   <>
    <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="colored"
    />
    <div className="d-flex">
       <Sidebar close={closeSidebar} open={isSidebarOpen}/>
    <div className="flex-grow-1">
       <ANavbar toggleSideBar={toggleSideBar} />
       <div style={contentStyle} className='p-3'>
           <Outlet/>
       </div>
      
    </div>
    </div>
  
   </>
  )
}

export default AdminLayout
