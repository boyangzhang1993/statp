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
import Alert from 'react-bootstrap/Alert'




export class DetailsForm extends Component {



    render() {
        const{ values, handleChange, handleontinue } = this.props;
        // this.props.values;
        return (


            <Card style={{ width: '28rem' } } border="dark">
              {/* <Card.Img variant="top" src="https://picsum.photos/100/80" /> */}
              <Card.Body>
                <h2>2. Let's learn about your data</h2>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              <div>
                <>
                <br />
                <Form.Group controlId="Form.ControlSelect3">
                  <h4>What is your outcome type?</h4>
                  <Form.Control as="select" onChange={handleChange('test1_out_come')}>
                    <option>Number</option>
                    <option>Category</option>
                    <option>Rank</option>
                    <option>RNA-Seq data</option>
                  </Form.Control>
                </Form.Group>
                <Form>
                <br />
                <Form.Group controlId="Form.ControlSelect1">
                  <h4>How many variables do you have</h4>
                  <Form.Control as="select" onChange={handleChange('test1_variable_number')}>
                    <option>1-3</option>
                    <option>4-10</option>
                    <option>10-100</option>
                    <option>100+</option>
                  </Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="Form.ControlSelect2">
                  <h4>How many sample size do you have</h4>
                  <Form.Control as="select" onChange={handleChange('test1_sample_size') }>
                    <option>1-10</option>
                    <option>10-20</option>
                    <option>20-50</option>
                    <option>50-100</option>
                    <option>100+</option>
                  </Form.Control>

                </Form.Group>
                
              <br />
              <Form.Group controlId="Form.ControlSelect4">
                <h4>How did you collect data?</h4>
                <Form.Control as="select" onChange={handleChange('test1_data_collection') }>
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
                onClick={handleontinue}
              >Continue</Button>
                    </>
                    </div>
              </Card.Body>
              </Card>


          
          




        )
    }
}

export default DetailsForm



