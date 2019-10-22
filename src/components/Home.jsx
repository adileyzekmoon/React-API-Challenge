import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
  state = {
      login : false,
  }

handleLogin = (login) =>{
    this.setState({login:login})
}


 loginStatus(){
     if(this.state.login){
         return (<div className="container-fluid d-flex align-items-center justify-content-center h-100">
                <div className="row mt-5">
                    <div className="col-6">
                        <Link to='/' className="btn btn-dark" onClick={() => {this.handleLogin(false)} }>Logout</Link>
                    </div>
                </div>
            </div>)
     }
     else{
         return (<div className="container-fluid d-flex align-items-center justify-content-center h-100">
                <div className="row mt-5">
                    <div className="col-6">
                        <a href="#"><button type="button" className="btn btn-dark">Register</button></a>
                    </div>
                    <div className="col-6">
                        <a href="#"><button type="button" className="btn btn-dark" disabled>Login</button></a>
                    </div>
                </div>
            </div>)
     }
 }

  render() {
    return (
        <div>
            <Navbar login={this.state.login} 
                onLogin = {this.handleLogin}                
                />
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-5">
                        <h1 className="display-4 text-dark pt-5 mb-2 mt-5">Welcome to the React + API Challenge Landing Page</h1>
                    </div>
                </div>
            </div>
            {this.loginStatus()}
            
        </div>
        
    );
  }
}

export default Home;
