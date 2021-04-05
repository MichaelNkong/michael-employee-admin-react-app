import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
                id: this.props.match.params.id,
               firstname:'',
               lastname:'',
               email:''
           
        }
        this.addFirstName=this.addFirstName.bind(this);
        this.addLastName=this.addLastName.bind(this);
        this.addEmail=this.addEmail.bind(this);
                     }
                     componentDidMount(){

                        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
                        let employee= res.data;
                        this.setState({
                           firstname:employee.firstname,
                           lastname:employee.lastname,
                           email:employee.email

                        });


                        });
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
           updateEmployee = (e)=>{
              e.preventDefault();
              let employee = {firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email}
                  console.log('employee=>' +JSON.stringify(employee));
                  EmployeeService.updateEmployee(employee, this.state.id).then(res =>{

                    this.props.history.push('/employees');
                  });
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
                            <h3 className="text-center">Update Employee </h3>
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
                                 <button className="btn btn-success" onClick={this.updateEmployee}>save</button>
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


export default UpdateEmployeeComponent;