import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';

class Card extends Component {
    state = {
        name:"Frae Valdehusa",
        handle:"@frae91",
        location:"Phillippines",
        followers:1,
        following:0,
        repos:18,
        
    }


  render() {
    return( 
        <div className="col-4 card">
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.handle}</p>
                <p className="card-text">{this.props.location}</p>
                <p className="card-text">Followers: {this.props.followers}, Following: {this.props.following}, Repos: {this.props.repos},</p>
            </div>
        </div>
                
        
    );
  }
}

export default Card;
