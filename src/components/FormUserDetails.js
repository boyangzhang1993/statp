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

export class DetailsForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const{ values, handleChange } = this.props;
        // this.props.values;
        return (
          <Container>
            <Row>
              <Image src="/p2.jpg" className="photo" rounded thumbnail fluid />
              
              <br />
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
                  
                </Form>
                <br />
                <Button
                  variant="primary"
                  size="lg"
                  onClick={this.continue}
                >Continue</Button>

            </>

          </div>
          
          </Row>


          </Container>
        )
    }
}

export default DetailsForm