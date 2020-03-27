import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionTypeComponent from './components/FunctionTypeComponent';
import ClassTypeComponent from './components/ClassTypeComponent';

function App() {

  const noticia1 = {
    titulo: 'COVID-19',
    descripcion: 'Tamos para atras'
  };

  const noticia2 = {
    titulo: '20 días más de cuarentena',
    descripcion: 'Somos todos felices'
  };

  return (
    <>
      <FunctionTypeComponent
        titulo="Function Type"
        descripcion="Este es un componente de tipo funcion."
        noticia={noticia1} />
      <ClassTypeComponent
        titulo="Class Type"
        descripcion="Este es un componente de tipo clase."
        noticia={noticia2} />
    </>
  );
}

export default App;
