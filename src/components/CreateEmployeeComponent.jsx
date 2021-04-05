import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            
               firstname:'',
               lastname:'',
               email:''
           
        }
        this.addFirstName=this.addFirstName.bind(this);
        this.addLastName=this.addLastName.bind(this);
        this.addEmail=this.addEmail.bind(this);
                     }
           addFirstName = (e) => {

            this.setState({firstname:e.target.value});
           }
           addLastName = (e) => {

            this.setState({lastname:e.target.value});
           }
           addEmail = (e) => {

            this.setState({email:e.target.value});
           }
           saveEmployee = (e)=>{
              e.preventDefault();
              let employee = {firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email}
                  console.log('employee=>' +JSON.stringify(employee));
                  EmployeeService.createEmployee(employee).then(res =>{

                    this.props.history.push('/employees');
                  })
           }
           cancel(){

             this.props.history.push('/employees');
           }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Employee </h3>
                                <div className="card-body">
                                  <form>
                                      <div className="form-group">
                                          <label >First Name:</label>
                                          <input placeholder = "First Name" value={this.state.firstname} onChange={this.addFirstName} type="text" name="firstname" className="form-control"/>

                                     </div>
                                        <div className="form-group">
                                          <label>Last Name:</label>
                                          <input placeholder="Last name" value={this.state.lastname} onChange={this.addLastName} type="text" name="lastname" className="form-control"/>

                                       </div>
                                     <div className="form-group">
                                          <label >Email:</label>
                                          <input placeholder="Email" value={this.state.email} onChange={this.addEmail} type="email" name="email" className="form-control"/>

                                     </div>
                                 <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style ={{marginLeft:"10px"}}>Cancel</button>
                                  </form>


                                </div>

                        </div>

                    </div>


                </div>
                
            </div>
        );
    }
}

export default CreateEmployeeComponent;