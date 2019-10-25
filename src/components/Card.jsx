import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import axios from 'axios';

class Card extends Component {
    state = {
        name:"",
        handle:"",
        location:"",
        followers:0,
        following:0,
        repos:0,
        dp:null
        
    }

    addToDb = () => {
    axios.post('http://localhost:3001/users/add', {
      url: this.props.url,
    });
    }

    componentDidMount() {
        console.log(this.props.url)
        fetch(this.props.url)
        .then(res=>res.json())
        .then(data=>this.setState({
            name:data.name,
            handle:data.login,
            location:data.location,
            followers:data.followers,
            following:data.following,
            repos:data.public_repos,
            dp:data.avatar_url
        }
                                 )
             )
    }

  render() {
    return( 
        <div className="col-3 m-4 h-auto card border-secondary">
            <div className="card-body container-fluid" >
                <div className="row">
                    <div className="col w-25">
                        <button className="btn btn-success btn-sm" style={{borderRadius: "50%"}} onClick={this.addToDb}>+</button>
                        <img src={this.state.dp} className="w-100" style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="col">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">@{this.state.handle}</p>
                        <p className="card-text">{this.state.location}</p>
                        <p className="card-text">Followers: {this.state.followers}, Following: {this.state.following}, Repos: {this.state.repos},</p>
                    </div>
                    
                </div>
            </div>
        </div>
                
        
    );
  }
}

export default Card;
