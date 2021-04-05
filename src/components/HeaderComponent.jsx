import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
     this.state ={

     }
this.getEmployees=this.getEmployees.bind(this)  
    }

    getEmployees(){

        this.props.history.push("/employees");
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://javaguides.net" className="navbar-brand">Employee Management App</a>
                    </div>
                    <div>
                        <ul className="Listunstyle"> 
                            <li><button onClick="{this.getEmployee}" className="btn btn-info">Add Employee</button></li>


                        </ul>

                    </div>
                        
                    </nav>



                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;