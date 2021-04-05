import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
                  employees:[]
                  }
                  this.addEmployee=this.addEmployee.bind(this)
                  this.editEmployee=this.editEmployee.bind(this)
                  this.viewEmployee=this.viewEmployee.bind(this)
                  
                }
    
    viewEmployee(id){

        this.props.history.push(`/view-employee/${id}`);
    }
            
    editEmployee(id){
     this.props.history.push(`/update-employee/${id}`);

    }
   
    
    addEmployee(){

        this.props.history.push('/add-employee/_add');
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    
    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div>
                 <button className="btn btn-primary " onClick={this.addEmployee}>addEmployee</button>
                 </div>
                 <br></br>
                 <div className="row">
                     <table className="table table-striped table-bordered">
                         <thead>
                            <tr>
                            <th>employee firstname</th>
                            <th>employee lastname</th>
                            <th>employee email</th>
                            <th>actions</th>
                            </tr>
                         </thead>
                         
                         <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstname} </td>   
                                             <td> {employee.lastname}</td>
                                             <td> {employee.email}</td>
                                             <td>
                                              <button onClick={() =>this.editEmployee(employee.id)} className="btn btn-info">Edit</button>
                                              <button onClick={() =>this.viewEmployee(employee.id)} className="btn btn-info" style={{marginLeft:"10px"}}>View</button>
                                        
                                             </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>

                          </table>
                   

                 </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;