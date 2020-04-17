import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Rolling Fullstack</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="text-primary">Home</NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ejercicios
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink to="/ejercicios/1" exact className="dropdown-item" activeClassName="text-primary">Ejercicio 1</NavLink>
              <NavLink to="/ejercicios/2" exact className="dropdown-item" activeClassName="text-primary">Ejercicio 2</NavLink>
              <NavLink to="/ejercicios/3" exact className="dropdown-item" activeClassName="text-primary">Ejercicio 3</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutme" exact className="nav-link" activeClassName="text-primary">About Me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
