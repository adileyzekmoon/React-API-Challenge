import React, { Component } from 'react';
import Navbar from './Navbar';

class Search extends Component {
    state = {
        login : true,
    }

    loginStatus(){
        if (this.state.login){
            return (<div className="container-fluid d-flex align-items-center justify-content-center h-100">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-5">
                            <h1 className="display-4 text-dark pt-5 mb-2 mt-5">You are logged in!</h1>
                        </div>
                    </div>
                </div>)
        }
        else{
            return (<div className="container-fluid d-flex align-items-center justify-content-center h-100">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-5">
                            <h1 className="display-4 text-dark pt-5 mb-2 mt-5">You need to be logged in to view this page!</h1>
                        </div>
                    </div>
                </div>)
        }
    }

    render() {
        return (
            <div>            
                <Navbar login={this.state.login} />
                {this.loginStatus()}
            </div>
            
        );
    }
}

export default Search;