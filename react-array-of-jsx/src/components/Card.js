import React from 'react';

function Card(props) {
  return (
    <div style={{ border: '1px solid green', margin: '20px', padding: '20px' }}>
      <h3>{props.titulo}</h3>
      <hr />
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Card;
