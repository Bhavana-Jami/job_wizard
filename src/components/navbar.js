import React from "react";
import { Navbar, Offcanvas, Container, Nav, Button } from 'react-bootstrap';
import '../styles/NavBar.css'
import { Link } from "react-router-dom";
function NavBar({ expand , home, about, contact}) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth" 
    })
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navBar sticky-top bg-body-tertiary  pe-5 ps-5" variant="light">
          <Container >
            <Navbar.Brand as={Link} to="/" className="h1 ms-5 ps-4 justify-content-center">JW</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title as={Link} to="/" id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Job Wizard
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-4 me-5">
                <Nav.Link as={Link}  className="pe-4" onClick={()=>home.current.scrollIntoView({behavior:"smooth"})}>Home</Nav.Link>

                  <Nav.Link as={Link}  className="pe-4" onClick={()=>about.current.scrollIntoView({behavior:"smooth"})}>About</Nav.Link>
                  <Nav.Link as={Link}  className="pe-4" onClick={()=>contact.current.scrollIntoView({behavior:"smooth"})}>Contact</Nav.Link>
                  {/* <Nav.Link as={Link} to="/">Explore</Nav.Link> */}

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar;