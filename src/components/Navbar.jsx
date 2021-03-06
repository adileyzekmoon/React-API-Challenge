import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';

class Navbar extends Component {

    
loginStatus(props){
    if(this.props.login){
        return (<ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to='/' className="nav-link" onClick={() => {this.props.onLogin(false)} }>Logout</Link>
                </li>  
            </ul>);
    }
    else{
        return (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link" onClick={() => {this.props.onLogin(true)} }>Login</Link>
                </li>    
            </ul>);
    }
}

searchStatus(props){
    if(this.props.login){
        return(<Link to="/search" className="nav-link">Search</Link>) 
    }
    else{
        return(<a className="nav-link disabled" href="#" >Search</a>)
    }
}
  render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand display-4" href="#">React + API</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    {this.searchStatus()}
                </li>    
            </ul>
            {this.loginStatus()}
        </nav>
    );
  }
}

export default Navbar;
