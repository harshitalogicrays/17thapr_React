import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const Header = () => {
    let styles=({ isActive}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "",
         backgroundColor:isActive?'aqua':'',
        };
      }
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
            <Nav.Link href="#features">Products</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link as={NavLink} to='/login'  style={styles}>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/register'  style={styles}>Register</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
