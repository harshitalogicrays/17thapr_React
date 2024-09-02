import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import ThemeBtn from './themeBtn';
import { FaShoppingCart } from 'react-icons/fa';
import { useMyContext } from './CartContext';
const Header = () => {
  const {cartItems} = useMyContext()
  const redirect =useNavigate()
    let styles=({ isActive}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "",
         backgroundColor:isActive?'aqua':'',
        };
      }

      let handleLogout=()=>{
        sessionStorage.removeItem('17aprlogin')
        toast.success("loggedOut Successfully")
        redirect('/')
      }

      let [username,setUsername]=useState('Guest')
      useEffect(()=>{
        if(sessionStorage.getItem('17aprlogin') != undefined){
          let obj=JSON.parse(sessionStorage.getItem('17aprlogin'))
          setUsername(obj.name)
        }
      },[sessionStorage.getItem('17aprlogin')])
  return (
   <>
       <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">theme-changer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' 
              style={styles}
         >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/products' 
              style={styles}>Products</Nav.Link>
        </Nav>
        <ThemeBtn/>
        <Nav>
        <Nav.Link as={NavLink} to='/cart'  style={styles}><FaShoppingCart size={30}/>
          <span class="badge rounded-pill text-bg-danger">{cartItems.length}</span>
          
        </Nav.Link>
          <ShowOnLogout>
            <Nav.Link as={NavLink} to='/login'  style={styles}>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/register'  style={styles}>Register</Nav.Link>
          </ShowOnLogout>
          <ShowOnLogin>
              <Nav.Link>Welcome {username}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </ShowOnLogin>
        </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
