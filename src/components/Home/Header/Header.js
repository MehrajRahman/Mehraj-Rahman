import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div >
      {/* <Navbar fixed="top"   variant="dark" expand="lg" >
        <div>
        <Navbar.Brand href="#home">Mehraj Rahman</Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            

            
            <Nav className="mr-left">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </div>
        </Navbar> */}
      <Navbar id="navbar" fixed="top" collapseOnSelect expand="lg"  variant="dark" sticky="top">
        <Navbar.Brand href="#home">M.Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              blog
            </Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <a href="https://drive.google.com/file/d/1hygVa86x5Fm2yogI67ThqYjZjeUC3sV5/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>Resume</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
