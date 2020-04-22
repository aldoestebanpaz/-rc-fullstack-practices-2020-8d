import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="col">
      <h1>Home Page</h1>
      <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/photos">Photos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/photos/100?width=100&height=100">Photo 100</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/aboutme">About Me</Link>
          </li>
        </ul>
    </div>
  );
}

export default HomePage;
