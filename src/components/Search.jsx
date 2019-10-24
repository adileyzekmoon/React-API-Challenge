import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';
import Cards from './Cards';

class Search extends Component {
    state = {
        login : true,
        cardCount : 0,
        currentSearch:"",
        userData:[],
    }

    textInput = (name) =>{
        fetch("https://api.github.com/search/users?q="+name)
        .then(res=>res.json())
        .then(data=>this.setState({userData:data.items}))
    }

    handleLogin = (login) =>{
        this.setState({login:login})
    }
    loginStatus(){
        if (this.state.login){
            return (<div>
                <div className="container-fluid d-flex align-items-center justify-content-center h-100 mt-5">
                    <input type="text" name='search' className='form-control' placeholder="Enter name" onChange={(e) => this.textInput(e.target.value)} style={{width : "200px"}}></input>
                </div>
                <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                    <h4 className="my-5">No user stored in this profile.</h4>
                </div></div>)
        }
        else{
            return (
                <div>
                    <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-5">
                                <h1 className="display-4 text-dark pt-5 mb-2 mt-5">You need to be logged in to view this page!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                        <div className="row mt-5">
                            <div className="col-6">
                                <Link  className="btn btn-dark" onClick={() => {this.handleLogin(true)} }>Login</Link>
                            </div>
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
                {this.loginStatus()}
                <Cards
                    cards={this.state.userData}/>
                
            </div>
            
        );
    }
}

export default Search;