import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
      </div>
    );
  }

}


export default Card;
