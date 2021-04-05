import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
     this.state ={

     }

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
                            <li><a>Add Employee</a></li>


                        </ul>

                    </div>
                        
                    </nav>



                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;