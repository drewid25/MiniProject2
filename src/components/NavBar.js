import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import '../../src/index.css';
const NavBar = () => {
    return (
      <Navbar expand='lg'>
      <Container fluid className="container">
      <Link to ="/"><Navbar.Brand href="#" className="navBrand ">  <img src="https://www.mikeanddenises.com/wp-content/uploads/2018/04/star-wars-logo-981.png" alt="Star Wars Logo" className="logo-img" /></Navbar.Brand></Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" basic-navbar-nav="true" >
            <Link to="/"> <Nav.Link className= 'link' href="#home">Home</Nav.Link></Link>
           <Link to="/About"> <Nav.Link   className= 'link' href="#link">About</Nav.Link></Link>
           
            <Nav.Link   className= 'link' href="#link">Series</Nav.Link>
            <Nav.Link   className= 'link' href="#link">Link</Nav.Link>
            
            <Button className="button">Login</Button>
            <Button className="button">Sign up</Button>
            
           
          </Nav>
        </Navbar.Collapse>

      </Container>
            </Navbar>
          
  )
}

export default NavBar
