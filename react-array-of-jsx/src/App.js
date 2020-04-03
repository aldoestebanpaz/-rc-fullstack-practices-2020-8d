import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {

  const noticias = [
    { titulo: "Titulo 1", descripcion: "descripcion 1" },
    { titulo: "Titulo 2", descripcion: "descripcion 2" },
    { titulo: "Titulo 3", descripcion: "descripcion 3" },
  ];


  const cards = noticias.map(n => <Card titulo={n.titulo} descripcion={n.descripcion} />);


  return (
    <>
      {cards}
    </>
  );
}

export default App;
