import React from 'react';

class NuevaPublicacionForm extends React.Component {

  state = {
    titulo: '',
    descripcion: ''
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  // handleChangeTitulo = (e) => {
  //   const value = e.target.value;
  //   this.setState({ titulo: value });
  // }

  // handleChangeDescripcion = (e) => {
  //   const value = e.target.value;
  //   this.setState({ descripcion: value });
  // }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    this.setState({ titulo: '', descripcion: '' });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>Nueva Publicación</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" value={this.state.titulo} onChange={this.handleChange} placeholder="Por favor ingrese el titulo" />
          <label htmlFor="descripcion">Descripción</label>
          <input type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleChange} placeholder="Por favor ingrese la descripcion" />
          <button onClick={this.handleClick}>Limpiar</button>
          <input type="submit" value="Crear Publicación"/>
        </form>
      </>
    );
  }

}

export default NuevaPublicacionForm;
