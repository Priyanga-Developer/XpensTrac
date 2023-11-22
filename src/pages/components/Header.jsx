import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <Navbar style={{backgroundColor:"rgb(83, 2, 83)"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/" style={{ textDecoration: "none",color:"#fff"}} ><h1>Xpenstrac.</h1></Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header