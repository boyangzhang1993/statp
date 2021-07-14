import { Button, Container, Navbar, Nav, NavDropdown, Card, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";

import './App.css';
import p1 from './p1.jpeg'; 
import { BrowserRouter as Router, Route } from "react-router-dom";

import home from './home'
import about from './about'
import SurveyApp from './surveyApp'

function App() {
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
      <div>
      <Welcome />

      </div>
      
      
      <End />

    </div>
  );
}


function Welcome() {
  return (
  <Router sticky="top">
  <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
  <Navbar.Brand href="/">Stat Pillow</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      
      <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/quickStat">Build your statistic by survey</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
    


    <Nav>
      <Nav.Link href="/contact">Contact me</Nav.Link>
      <Nav.Link eventKey={2} href="/about">
        About me
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/about"  component={About} />
      <Route exact path="/contact"  component={Contact} />
      <Route exact path="/quickStat"  component={Survey} />
      </Router>


);
}

function End() {
  return (
   
    <div >
       <br />
    {/* <Nav className="justify-content-center" activeKey="/home" xpand="lg" 
    bg="primary" variant="dark" sticky="button">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav.Item>

    </Nav> */}
    </div>

);
}


// Home Page
const Home = () => (
  <div>
  
  <Jumbotron fluid style={{
        backgroundColor: '#ededf7'}}>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
      </Jumbotron>

      <div className = 'container'>
        <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/100/80" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              </Card>


            </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
              </Col>
      </Row>

      </Container>
      </div>
      <Jumbotron fluid style={{
        backgroundColor: '#edf1f7'}}>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
      </Jumbotron>

      <div className = 'container'>
          <h2>What is in the box?</h2>
          <Row>
            <Col>
              <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>            
            </Col>
            <Col>
            <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>      
            </Col>
            <Col>
            <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>             
            
            </Col>
            <Col>
            <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>             
            
            </Col>
            <Col>
            <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>             
            
            </Col>
            <Col>
            <Card border="dark">
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                </Card.Body>
              </Card>             
            
            </Col>                        

          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>









      </div>


  </div>
  );
// About Page
const About = () => (
<h1>about</h1>
  );
// Contact Page
const Contact = () => (
  <>
    <h1>Contact</h1>
    
  </>
  );

const Survey = () => (
  <div>
    <h1>Test</h1>
    <div><SurveyApp /></div>
    
    <h2>T3</h2>


  </div>




  )
export default App;
