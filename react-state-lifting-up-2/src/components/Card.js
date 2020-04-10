import React from 'react';

function Card(props) {
  const { cardData, remove } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{cardData.title}</h5>
        <p className="card-text">{cardData.description}</p>
        <button onClick={() => remove(cardData.id)}>Remove me</button>
      </div>
    </div>
  );
}

export default Card;
