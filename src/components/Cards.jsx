import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
    
    
    mapCards(){
        if (this.props.cards){
            return(
                <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                    <div className="row">{ this.props.cards.map(card => <Card name={card.name} handle={card.login} location={card.location} following={card.following} followers={card.followers} repos={card.repos} />)}
      </div></div>
            )
        }
    }
    
    render() {
    return(<div>
      {this.mapCards()}
            </div>
            );
  }
}

export default Cards;
