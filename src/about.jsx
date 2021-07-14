import { Button, Container, Navbar, Nav, NavDropdown, Card, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";

import './App.css';
import p1 from './p1.jpeg'; 
import { BrowserRouter as Router, Route } from "react-router-dom";



function about() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (
    <div className="App">
      
      <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="/">Stat Pillow</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Nav.Link href="#contact">Contact me</Nav.Link>
            <Nav.Link eventKey={2} href="#about_me">
              About me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default about;
