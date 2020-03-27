import React from 'react';

function FunctionTypeComponent(props) {
  console.log('props de la function');
  console.log(props);
  return (
    <div style={{ border: '1px solid green', margin: '20px', padding: '20px' }}>
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <hr />
      <strong>{props.noticia.titulo}</strong>
      <p>{props.noticia.descripcion}</p>
    </div>
  );
}

export default FunctionTypeComponent;
