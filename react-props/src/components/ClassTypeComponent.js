import React from 'react';

class ClassTypeComponent extends React.Component {

  render() {
    console.log('props de la clase');
    console.log(this.props);
    return (
      <div style={{ border: '1px solid blue', margin: '20px', padding: '20px' }}>
        <h3>{this.props.titulo}</h3>
        <p>{this.props.descripcion}</p>
        <hr />
        <strong>{this.props.noticia.titulo}</strong>
        <p>{this.props.noticia.descripcion}</p>
      </div>
    );
  }
}

export default ClassTypeComponent;
