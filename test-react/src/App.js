import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home page</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
