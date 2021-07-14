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

export class Form2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
      render() {
        const { values, handleChange } = this.props;
        return (
          <Container>
          <Row>
            <Col><Image src="/p2.jpg" rounded thumbnail fluid /></Col>

            
            <Col>2 of 3
        <div>
          <>
                <Form>
                <br />
                <Form.Group controlId="Form.ControlSelect1">
                  <h4 size="lg">How comfortable do you think about normality</h4>
                  <Form.Control as="select" size="lg" onChange={handleChange('firstName')}>
                    <option>Comfortable</option>
                    <option>Uncomfortable</option>
                    <option>Not sure</option>
                  </Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="Form.ControlSelect2">
                  <h4>How did you collect data?</h4>
                  <Form.Control as="select" size="lg" onChange={handleChange('lastName') }>
                    <option>Data were collected from a Experiment</option>
                    <option>Data were collected from observersions such as survey.</option>
                    <option>Not sure</option>

                  </Form.Control>
                </Form.Group>
                
              </Form>
              <br />
    
              <Button
                variant="dark"
                size="lg"
                onClick={this.back}
              >Back</Button>

              <Button
                variant="primary"
                size="lg"
                onClick={this.continue}
              >Continue</Button>

          </>

        </div>
        </Col>
        </Row>


        </Container>





        );
      }
}

export default Form2