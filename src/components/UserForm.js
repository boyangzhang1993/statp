import React, { Component } from 'react'
import DetailsForm from "./FormUserDetails"
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import './styles.css'
import NonParametric from './R_traditional_test/np'



export class UserForm extends Component {
    state = {
        test1_variable_number:'Number',
        test1_sample_size:'1-3',
        test1_data_collection:'1-10',
        test1_out_come:'Data were collected from a Experiment',
        isLoggedIn: false
    
    }

    // Handle Continue button
    handleontinue = e => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.test1_variable_number ==''){alert("Oops, something you forget to choose?")
      }else if (this.state.test1_sample_size =='') {alert("Oops, something you forget to choose?")

      }else if (this.state.test1_data_collection ==''){alert("Oops, something you forget to choose?")

      }else if (this.state.test1_out_come ==''){alert("Oops, something you forget to choose?")

      }else{

      };
      this.setState({isLoggedIn: true});

        
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]:e.target.value});
        console.log(this.state);
        

    }
    // Handle Continue button
    handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    render() {
        const { step } = this.state;
        const { test1_variable_number,test1_sample_size,test1_data_collection,test1_out_come } = this.state;
        const values = { test1_variable_number,test1_sample_size,test1_data_collection,test1_out_come }
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) { button = <LogoutButton onClick={this.handleLogoutClick} />;    
        } else {button = <LoginButton onClick={this.handleLoginClick} />; }


        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />        
                

                <Row xs={1} md={4} className="g-4">
                <Col>
                                        
                <Card style={{ width: '18rem' }} className = 'card' bg='dark' text = 'light'>
                {/* <Card.Img variant="top" src="https://picsum.photos/100/80" /> */}
                <Card.Body>
                <h2> 1. Instruction </h2>
                <br />
                <Card.Text>
                <NewlineText text={'1. Fill the form on the left.\n2. Press Continue button.\n3. Select a recommended procedure.'} />
                        {/* 1. Fill the form on the left.
                        2. Press Continue button.
                        3. Select a recommended procedure. */}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <DetailsForm 
            handleChange = {this.handleChange}
            values = {values}
            handleontinue = {this.handleontinue}
            />
            </Col>
            <Col>
            <ThirdCol isLoggedIn={isLoggedIn} /> 
            </Col>                  
                                            
        </Row>



            </div>

        )

    }
}

export default UserForm



function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }


  function UserGreeting(props) {
    return (
            <div>
            <h1>This is what we recommend for you. </h1>
            <p>
            You can redo the survey by prcess continue button.
          </p>
            <hr/>
            </div>);
  }
  
  function GuestGreeting(props) {
    return (
        <div >
            <h1>Welcome to Stat Pillow</h1>
            <p>
            Fill the formin the center> Prcess continue > Select a procedure
          </p>
          <hr/>
        </div>
    );
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) { return <UserGreeting />;}return <GuestGreeting />;}
    function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        Login
        </button>
    );
    }

    function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        Logout
        </button>
    );
    }


      function ThirdCol(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) { return <RecommendedTest />;}return <DefaultResult />;}

        function RecommendedTest(props) {
            return (
                    <div>
                        
                        <div class="cards-list">
                            <NonParametric />
                        </div>
                    </div>);
          }
          
          function DefaultResult(props) {



            return (
                <div></div>

            );
          }