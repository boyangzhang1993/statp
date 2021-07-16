import React, { Component } from 'react'
import DetailsForm from "./FormUserDetails"
import Form2 from "./FormPersonalDetails"

export class UserForm extends Component {
    state = {
        test1_variable_number:'Number',
        test1_sample_size:'1-3',
        test1_data_collection:'1-10',
        test1_out_come:'Data were collected from a Experiment'
    
    }
    // Proceed to next steps
    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });


    }
    //Go back to prev steps
    prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });


    }
    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]:e.target.value});
        console.log(this.state);

    }

    render() {
        const { step } = this.state;
        const { test1_variable_number,test1_sample_size,test1_data_collection,test1_out_come } = this.state;
        const values = { test1_variable_number,test1_sample_size,test1_data_collection,test1_out_come }
        return(
            <div>
            <DetailsForm 
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
            />
            </div>

        )

        // switch(step){
        //     case 1:
        //         return(
        //             <div>
        //             <DetailsForm 
        //                 nextStep = {this.nextStep}
        //                 handleChange = {this.handleChange}
        //                 values = {values}
        //             />
        //             <h1>Case 1</h1>

        //             </div>

        //         )
        //     case 2:
        //         return(
        //             <div>
        //             <Form2 
        //                 nextStep = {this.nextStep}
        //                 handleChange = {this.handleChange}
        //                 values = {values}
        //                 prevStep={this.prevStep}
        //             />
        //             <h1>Case 2</h1>

        //             </div>
        //         )
        //     case 3:
        //         return(
        //             <h1>Confirm</h1>)
        //     case 4:
        //         return(
        //             <h1>4</h1>
        //         )

        // }
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserForm
