import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Navbar, Nav, NavDropdown, Card, Jumbotron } from 'react-bootstrap';
import FormTraditional from './FormTraditionalTesting'; 

export class DetailsForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const{ values, handleChange } = this.props;
        // this.props.values;
        return (
          <Container fluid>
              <br />
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
              <div>

<>
      <Form>
      <br />
      <Form.Group controlId="Form.ControlSelect1">
        <h4 size="lg">How many variables do you have</h4>
        <Form.Control as="select" size="lg" onChange={handleChange('firstName')}>
          <option>1-3</option>
          <option>4-10</option>
          <option>10-100</option>
          <option>100+</option>
        </Form.Control>
      </Form.Group>
      <br />
      <Form.Group controlId="Form.ControlSelect2">
        <h4>How many sample size do you have</h4>
        <Form.Control as="select" size="lg" onChange={handleChange('lastName') }>
          <option>1-10</option>
          <option>10-20</option>
          <option>20-50</option>
          <option>50-100</option>
          <option>100+</option>
        </Form.Control>


      </Form.Group>
      
    <br />
    <Form.Group controlId="Form.ControlSelect3">
      <h4 size="lg">How comfortable do you think about normality</h4>
      <Form.Control as="select" size="lg" onChange={handleChange('firstName')}>
        <option>Comfortable</option>
        <option>Uncomfortable</option>
        <option>Not sure</option>
      </Form.Control>
    </Form.Group>
    <br />
    <Form.Group controlId="Form.ControlSelect4">
      <h4>How did you collect data?</h4>
      <Form.Control as="select" size="lg" onChange={handleChange('lastName') }>
        <option>Data were collected from a Experiment</option>
        <option>Data were collected from observersions such as survey.</option>
        <option>Not sure</option>

      </Form.Control>
    </Form.Group>
    
  
  <br />                  
    </Form>
    <br />
    <Button
      variant="primary"
      size="lg"
      onClick={this.continue}
    >Continue</Button>

</>

</div>
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


          
          </Container>




        )
    }
}

export default DetailsForm