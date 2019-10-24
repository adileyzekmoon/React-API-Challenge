import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';

class Card extends Component {
    state = {
        name:"",
        handle:"",
        location:"",
        followers:0,
        following:0,
        repos:0,
        
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
            repos:data.public_repos
        }
                                 )
             )
    }

  render() {
    return( 
        <div className="col-4 card">
            <div className="card-body">
                <h5 className="card-title">{this.state.name}</h5>
                <p className="card-text">{this.state.handle}</p>
                <p className="card-text">{this.state.location}</p>
                <p className="card-text">Followers: {this.state.followers}, Following: {this.state.following}, Repos: {this.state.repos},</p>
            </div>
        </div>
                
        
    );
  }
}

export default Card;
