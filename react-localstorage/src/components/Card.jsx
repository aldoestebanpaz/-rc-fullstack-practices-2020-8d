import React from 'react';

function Card({ title, summary, image, index, removeMe }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summary}</p>
        <button className="btn btn-primary" onClick={ () => removeMe(index) } >Remove Me</button>
      </div>
    </div>
  );
}

export default Card;
