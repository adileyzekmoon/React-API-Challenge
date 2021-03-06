import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
    
    
    mapCards(){
        if (this.props.cards){
            return(
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">{ this.props.cards.map(card => <Card key={card.id} url={card.url}/>)}
      </div></div>
            )
        }
        else if (this.props.store){
            return(
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">{ this.props.store.map(user => <Card key={user._id} url={user.url}/>)}
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
